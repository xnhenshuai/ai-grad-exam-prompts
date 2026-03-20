const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let questions = [];
let mistakes = [];
let nextUserId = 1;
let nextQuestionId = 1;
let nextMistakeId = 1;

function sanitizeUser(u) {
  return { id: u.id, username: u.username };
}

app.post('/auth/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password are required' });
  }

  const existing = users.find((u) => u.username.toLowerCase() === username.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: 'username already exists' });
  }

  const user = { id: nextUserId++, username, password };
  users.push(user);
  res.status(201).json({ user: sanitizeUser(user) });
});

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password are required' });
  }

  const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'invalid username or password' });
  }

  const token = `userid:${user.id}`;
  res.json({ user: sanitizeUser(user), token });
});

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.post('/questions', (req, res) => {
  const { content, topic } = req.body;
  if (!content || !topic) {
    return res.status(400).json({ error: 'content and topic are required' });
  }

  const question = { id: nextQuestionId++, content, topic };
  questions.push(question);
  res.status(201).json(question);
});

app.get('/mistakes', (req, res) => {
  const { user_id } = req.query;
  let filtered = mistakes;
  if (user_id) {
    const uid = parseInt(user_id, 10);
    filtered = filtered.filter((m) => m.user_id === uid);
  }

  const result = filtered.map((m) => {
    const user = users.find((u) => u.id === m.user_id);
    const question = questions.find((q) => q.id === m.question_id);
    return {
      id: m.id,
      user_id: m.user_id,
      question_id: m.question_id,
      username: user ? user.username : null,
      question_content: question ? question.content : null,
      question_topic: question ? question.topic : null,
    };
  });
  res.json(result);
});

app.post('/mistakes', (req, res) => {
  const { user_id, question_id } = req.body;
  const userId = parseInt(user_id, 10);
  const questionId = parseInt(question_id, 10);

  if (!userId || !questionId) {
    return res.status(400).json({ error: 'user_id and question_id are required and must be numeric' });
  }

  const user = users.find((u) => u.id === userId);
  const question = questions.find((q) => q.id === questionId);
  if (!user || !question) {
    return res.status(404).json({ error: 'user or question not found' });
  }

  const mistake = { id: nextMistakeId++, user_id: userId, question_id: questionId };
  mistakes.push(mistake);
  res.status(201).json(mistake);
});

// Seed basic data
users.push({ id: nextUserId++, username: 'admin', password: 'admin' });
questions.push({ id: nextQuestionId++, content: 'What is gradient descent?', topic: 'machine learning' });
questions.push({ id: nextQuestionId++, content: 'Explain CNN vs RNN.', topic: 'deep learning' });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
