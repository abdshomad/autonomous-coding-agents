# Vibe Coding with Antigravity CLI

The Antigravity CLI is a command-line interface designed to orchestrate and run autonomous coding agents directly on your workspace repository. It enables developers to work at a high level of abstraction, delegating tasks to autonomous agent loops.

## 🚀 Key Autonomous Commands

### 1. Fully Autonomous Goal Execution (`/goal`)
The `/goal` command launches a continuous, self-correcting agent loop to achieve a specific development objective. The agent will read rules, check plans, modify code, run tests, and iterate until the task is complete.
* **How to run**:
  ```text
  /goal Read AGENTS.md and execute the next enhancement task (trigger 'next')
  ```

### 2. Scheduled Runs and Reminders (`/schedule`)
You can automate tasks using standard cron schedules or one-shot duration timers. This is useful for checking repository integrity or triggering checks on a regular basis.
* **Cron schedule example**:
  ```text
  /schedule "Run the next enhancement task every morning at 9 AM"
  ```
* **Duration timer example** (notifies the agent in 5 minutes):
  ```text
  /schedule DurationSeconds=300 Prompt="Verify if build integrity is intact"
  ```

### 3. Interactive Interview Mode (`/grill-me`)
Before launching an agent task, run `/grill-me` to start an interactive alignment session. The agent will ask clarifying questions about specifications, edge cases, and design choices.

### 4. Multi-Agent Team Execution (`/teamwork-preview`)
Runs a multi-agent orchestration workflow where specialized agents (Researcher, Coder, and QA Tester) work in parallel to achieve the goals in `AGENTS.md`.
