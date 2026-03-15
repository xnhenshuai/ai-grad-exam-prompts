# AI 研究所考試準備平台 – Prompt 使用紀錄

## 1. 專案目標

本專案的目標是設計一個 **AI 輔助的研究所考試準備平台**，幫助學生更有效率地準備研究所入學考試。

系統會分析歷年的考古題資料，並提供智慧化的學習輔助功能，例如：

- 收集歷年考試題目
- 自動依主題分類題目
- 分析各主題出現頻率
- 預測未來可能的重要考點
- 生成個人化讀書計畫
- 追蹤錯題與學習進度


---

# 2. 第一個 Prompt：系統架構設計

第一個 Prompt 的目的是請 AI 設計整個系統的整體架構。

Prompt：

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

---

## AI 回應摘要

AI 提出了一個模組化系統架構，包括：

- 前端 Web 應用程式
- 後端 API 伺服器
- 資料庫系統
- 機器學習分析模組
- 考題資料處理管線 (data pipeline)

AI 同時建議了一些可能使用的技術，例如：

- React / Vue 作為前端框架
- FastAPI 作為後端 API
- PostgreSQL 作為資料庫

這個 Prompt 的目的是先確立整體系統架構，而不是直接生成程式碼。

---

# 3. 第二個 Prompt：Orchestration 工作流程設計

為了符合本次作業要求的 **orchestration 模式**，第二個 Prompt 用來規劃系統設計時的角色分工與工作流程。

Prompt：

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

---

## AI 回應摘要

AI 將系統設計流程拆分成多個角色：

Planner  
Architect  
Backend Developer  
Frontend Developer  
Data Pipeline Developer  
Reviewer  
Tool Runner  

每個角色都有不同職責，例如：

Planner  
負責整體專案規劃與任務拆解

Architect  
設計整體系統架構

Backend Developer  
設計 API 與後端服務

Frontend Developer  
負責前端使用者介面

Data Pipeline Developer  
處理考題資料收集與轉換

Reviewer  
檢查設計與結果是否合理

Tool Runner  
負責執行工具與整合結果

透過這樣的角色分工，可以讓系統設計流程更加模組化與有組織。

---

# 4. 第三個 Prompt：資料流程與控制流程

第三個 Prompt 用來定義系統中的資料流與任務狀態流程。

Prompt：

Include task lifecycle states such as:

created  
queued  
running  
validating  
completed  
failed  
retrying  

---

## AI 回應摘要

AI 描述了整個系統的資料流程：

1. 使用者提出請求
2. 前端發送 API 請求
3. 後端接收並處理請求
4. Data pipeline 處理考試資料
5. AI 模組進行主題分析
6. 學習計畫生成模組產生結果
7. 資料庫儲存分析結果
8. 前端顯示分析結果與學習儀表板

這樣的流程可以確保資料從輸入到結果產生都有清楚的處理步驟。

---

# 5. Prompt Engineering 使用策略

在這個專案中，Prompt 的設計採用了幾個策略。

## 分階段 Prompt

我們並沒有一次要求 AI 生成完整系統，而是分成多個階段：

1. 系統架構設計
2. orchestration 角色規劃
3. 資料流程設計
4. 文件整理

這樣的方式可以讓 AI 在每一個階段專注於不同問題。

## 明確限制

在 Prompt 中會加入明確限制，例如：

"Do not generate code yet"

這樣可以避免 AI 太早生成程式碼，而是先專注在架構設計。

---

# 6. 使用 AI 的觀察與心得

在這次專案中，使用 Roo Code 這類 AI 工具可以大幅加快系統設計速度。

## 優點

- 可以快速生成系統架構
- 能夠協助整理設計流程
- 可以幫助撰寫文件與說明
- 有助於建立模組化設計

## 限制

- Prompt 必須非常清楚
- 如果 Prompt 太模糊，AI 會給出很泛的答案
- orchestration 概念需要明確要求 AI 才會生成

因此 Prompt 的品質會直接影響 AI 回應的品質。

---

# 7. 為什麼需要 Orchestration

這個專案如果只使用一個 Prompt，很難同時處理：

- 前端設計
- 後端 API
- 資料庫規劃
- AI 分析模組
- Data pipeline
- 系統工作流程

如果一次要求 AI 生成全部內容，結果通常會：

- 架構不清楚
- 模組責任不明確
- 文件不容易整理

因此使用 orchestration 的方式，把專案拆成多個階段：

1. 架構設計
2. 角色與流程設計
3. 資料流程設計
4. 文件整理

這樣可以讓整個系統設計過程更有結構。

---

# 8. 結論

本專案展示了 AI 如何協助設計複雜軟體系統。

透過設計良好的 Prompt 與 orchestration 工作流程，AI 可以協助完成：

- 系統架構設計
- 工作流程規劃
- 文件撰寫
- 專案結構建立

最終產生了一個結構清楚的 **AI 研究所考試準備平台設計方案**。