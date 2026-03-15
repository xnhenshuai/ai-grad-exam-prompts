# AI Graduate Exam Preparation Platform – Prompt Log

## 1. Project Goal

The goal of this project is to design an AI-powered platform that helps students prepare for graduate entrance examinations.

The system analyzes historical exam questions and provides intelligent study assistance, including:

- collecting past exam questions
- classifying questions by topic
- analyzing topic frequency
- predicting important topics
- generating study plans
- tracking user mistakes

This project focuses on **system design using AI orchestration**, rather than fully implementing all code.

---

# 2. Initial Prompt – System Architecture Design

The first prompt was used to instruct the AI to design the overall architecture of the system.

Prompt used:
Design the architecture for a project called AI Graduate Exam Preparation Intelligence Platform.

The system should help students prepare for graduate entrance exams by:

collecting past exam questions

classifying questions by topic

analyzing topic frequency

predicting important topics

generating study plans

tracking mistakes

First propose the full system architecture and modules.
Do not generate code yet.

### AI Response Summary

The AI proposed a modular architecture including:

- Frontend web application
- Backend API server
- Database system
- Machine learning modules
- Data pipeline for exam questions

The AI also suggested technologies such as:

- React / Vue for frontend
- FastAPI for backend
- PostgreSQL for database

---

# 3. Second Prompt – Orchestration Planning

To satisfy the assignment requirement of orchestration mode, the next prompt focused on defining roles and workflow structure.

Prompt used:
Refine the architecture into an orchestration-oriented engineering plan.

Define the following roles:

Planner

Architect

Backend Developer

Frontend Developer

Data Pipeline Developer

Reviewer

Tool Runner

Describe responsibilities and break the project into implementation phases.


### AI Response Summary

The AI generated the following roles:

Planner  
Architect  
Backend Developer  
Frontend Developer  
Data Pipeline Developer  
Reviewer  
Tool Runner  

Each role was responsible for different aspects of the project, allowing the system design process to be modular and structured.

---

# 4. Third Prompt – Data Flow and Control Flow

The next prompt focused on defining how data moves through the system.

Prompt used:
Include task lifecycle states such as:

created

queued

running

validating

completed

failed

retrying

### AI Response Summary

The AI described the following workflow:

1. User request
2. Frontend sends API request
3. Backend processes request
4. Data pipeline processes exam data
5. AI modules analyze topics
6. Study plan generator produces results
7. Database stores results
8. Frontend displays analytics dashboard

---

# 5. Prompt Engineering Strategy

During the project, prompts were designed to follow several strategies.

### Step-by-step prompts

Instead of generating everything at once, prompts were divided into stages:

1. architecture design
2. orchestration planning
3. data flow design
4. documentation generation

This approach improved clarity and organization.

### Clear constraints

Prompts often included instructions such as:

"Do not generate code yet"

This prevented the AI from producing unnecessary implementation details too early.

---

# 6. Observations

Using AI tools such as Roo Code significantly accelerated the system design process.

Benefits:

- rapid architecture generation
- structured workflow planning
- easier documentation generation

Limitations:

- prompts must be clearly structured
- vague prompts lead to generic answers
- orchestration concepts must be explicitly requested

---

# 7. Conclusion

This project demonstrates how AI can assist in designing complex software systems.

Through carefully designed prompts and orchestration-based workflows, the AI helped produce:

- system architecture
- workflow design
- documentation
- project structure

The result is a well-structured design for an AI-based graduate exam preparation platform.



