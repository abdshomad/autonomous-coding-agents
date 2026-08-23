# Vibe Coding with Antigravity CLI

The Antigravity CLI is a command-line interface designed to orchestrate and run autonomous coding agents directly on your workspace repository. It enables developers to work at a high level of abstraction, delegating tasks to autonomous agent loops.

## 🚀 Key Autonomous Commands & Triggers

### 1. Fully Autonomous Goal Execution (`/goal`)
The `/goal` command launches a continuous, self-correcting agent loop to achieve a specific development objective or trigger:
* **Bootstrap (`i` / `init`)**:
  ```text
  /goal Read AGENTS.md, ingest docs/deep-research/, build docs/prd/, and scaffold workspace (trigger 'i')
  ```

* **Enhancement Planning (`e` / `enhance`)**:
  ```text
  /goal Read AGENTS.md and generate next enhancement plan in plans/next-enhancements.md (trigger 'e')
  ```
* **Task Execution (`n` / `next` / `n{x}`)**:
  ```text
  /goal Read AGENTS.md and execute the next 3 enhancement tasks (trigger 'n3')
  ```
* **Xtend (auto) Triggers (`{x}`)**:

  * **Review (`r`)**: `/goal Run full code and security review per AGENTS.md (trigger 'r')`
  * **Migrate / Milestone (`m`)**: `/goal Execute next roadmap phase in plans/roadmaps/ (trigger 'm')`
  * **Test (`t`)**: `/goal Run all test suites and verification benchmarks (trigger 't')`
  * **Fix (`f`)**: `/goal Investigate test failure and repair regression (trigger 'f')`
  * **Clean (`c`)**: `/goal Refactor files over 256 LOC into modular sub-files (trigger 'c')`
  * **Deploy (`d`)**: `/goal Prepare build release and verify deployment routing (trigger 'd')`


### 2. Periodic Interval Looping (`/loop`)
You can automate recurring task execution at specific intervals:
* **Indefinite 5-Minute Loop**:
  ```text
  /loop 5m
  ```
* **Capped 10-Minute Loop (6 iterations)**:
  ```text
  /loop 10m max=6
  ```
* **Milestone Loop**:
  ```text
  /loop 15m until=phase1
  ```

### 3. Scheduled Runs and Reminders (`/schedule`)
You can automate tasks using standard cron schedules or one-shot duration timers:
* **Cron schedule example**:
  ```text
  /schedule "Run the next enhancement task every morning at 9 AM"
  ```
* **Duration timer example** (notifies the agent in 5 minutes):
  ```text
  /schedule DurationSeconds=300 Prompt="Verify if build integrity is intact"
  ```

### 4. Interactive Interview Mode (`/grill-me`)

Before launching a major architectural change or task, run `/grill-me` to start an interactive alignment session. The agent will ask clarifying questions about specifications, edge cases, and design choices.

### 5. AI Reasoning & Plan Mode Protocol
For Deep Research (`docs/deep-research/`) and PRD generation (`docs/prd/`), ensure the CLI agent is configured with Plan Mode and the highest-intelligence reasoning model (e.g. `pro` / high thinking budget):
```bash
# Example launching high-reasoning goal
/goal Switch to Plan Mode with Pro model and execute research & PRD bootstrap (trigger 'i')
```

