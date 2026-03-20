## 1. 系統概述
這是一個簡化版 AI 研究所考試準備平台。

## 2. 功能
- 題庫管理
- 錯題紀錄
- 主題分析（簡單版）

## 3. API 規格

### Auth
POST /auth/login
POST /auth/register

### Questions
GET /questions
POST /questions

### Mistakes
GET /mistakes
POST /mistakes

## 4. 資料模型

User
- id
- username

Question
- id
- content
- topic

Mistake
- id
- user_id
- question_id

## 5. 前端需求
- 登入頁
- 題庫列表
- 錯題列表

## 6. 限制
- REST API
- JSON 格式