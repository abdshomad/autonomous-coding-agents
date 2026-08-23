---
name: loop-orchestrator
description: Automate recurring execution of task 'n' every x minutes with safety guards and auto-replanning.
stage: automation
trigger: /loop
---

# Loop Orchestrator (`/loop`)

## 🎯 Purpose
Automate the continuous, periodic execution of enhancement tasks (`n`) every `x` minutes, providing hands-free codebase evolution with automated replanning (`e`) and strict quality gates (`t → f → c → r`).

## ⌨️ Command Syntax
* `/loop 5m` — Execute task `n` every 5 minutes indefinitely.
* `/loop 10m max=6` — Execute task `n` every 10 minutes, capping at 6 iterations.
* `/loop 15m until=phase1` — Execute task `n` every 15 minutes until Phase 1 roadmap is complete.

## 📋 Step-by-Step Execution Checklist
1. **Parse User Arguments**:
   - Extract interval minutes `x` (e.g. `5m` -> 5 minutes, `10m` -> 10 minutes, `1h` -> 60 minutes).
   - Extract optional caps (`max=<N>`) or milestones (`until=<milestone>`).
2. **Configure Native Schedule**:
   - Translate interval into a 5-field cron expression:
     - `5m` -> `*/5 * * * *`
     - `10m` -> `*/10 * * * *`
     - `15m` -> `*/15 * * * *`
     - `30m` -> `*/30 * * * *`
     - `1h` -> `0 * * * *`
   - Invoke the `schedule` tool with `CronExpression`, `MaxIterations`, and `Prompt="Execute next enhancement task (trigger 'n')"`.
3. **Periodic Execution Cycle (On Each Tick)**:
   - **Pre-Flight Check**: Inspect `plans/next-enhancements.md`. If all tasks are `[DONE]`, auto-trigger `e` (`skills/task-decomposition/`) to generate 3 new tasks per module from `docs/prd/`.
   - **Task Implementation**: Implement top `[TODO]` task following `skills/test-driven-development/`.
   - **Autonomous Quality Chain**: Run `t` (Test) -> `f` (Self-Correct) -> `c` (Split >256 LOC) -> `r` (Audit PRD & Decisions).
4. **Safety Guards & Early Termination**:
   - **Unrecoverable Failure**: If tests fail in `f` after 3 repair attempts, cancel the schedule task and alert user.
   - **Completion Condition**: If `until=<milestone>` criteria are met, cancel the schedule task and report milestone done.

## 🛑 Anti-Rationalization Table

| Excuse | Reality | Action |
|:---|:---|:---|
| *"I'll use a bash sleep loop in terminal."* | Background sleep blocks the agent and wastes process resources. | Always use the native `schedule` cron tool. |
| *"I'll continue looping even though tests are failing."* | Compounding broken builds corrupts codebase health. | Auto-pause and alert user if tests fail unrecoverably. |
| *"I'll stop looping when active plan is done."* | The inex method mandates continuous evolution. | Auto-trigger `e` to replenish the plan. |

## ✅ Verification Gate
- [ ] Schedule successfully registered with valid cron expression.
- [ ] Each tick produces green verification logs in `docs/features/`.
