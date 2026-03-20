# ai-grad-exam-platform-speckit

簡化版 AI 研究所考試準備平台

## 1. 需求對應
- API: /auth/login, /auth/register, /questions (GET/POST), /mistakes (GET/POST)
- 資料模型: User(id, username), Question(id, content, topic), Mistake(id, user_id, question_id)
- 前端: 登入頁、題庫列表、錯題列表

## 2. 安裝與啟動

### Backend
1. 打開命令提示字元，切換到 `backend` 目錄
2. `npm install`
3. `npm start` (或 `node index.js`)

API 伺服器預設在 `http://localhost:3000`

### Frontend
可直接開 `frontend/index.html`，建議用簡易靜態伺服器：

- `npm install -g serve`  (如果尚未安裝)
- `serve frontend`

然後開啟顯示的網址 (例如 `http://localhost:3000`)

## 3. 測試帳號
- admin / admin

## 4. 說明
- 全部資料暫存在記憶體，重啟會重置
- `mistakes` endpoint 可透過 query `?user_id=...` 篩選
