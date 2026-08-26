---
name: loop-orchestrator
description: Automate recurring execution of task 'n' via cron schedule.
stage: automation
trigger: /loop
---

# Loop Orchestrator (`/loop`)

## Directives
1. **Syntax**:
   - `/loop 5m` (infinite 5m loop)
   - `/loop 10m max=6` (capped 6 iterations)
   - `/loop 15m until=phase1` (milestone capped)
2. **Scheduling**: Convert interval to 5-field cron (`5m` -> `*/5 * * * *`). Call native `schedule` tool.
3. **Loop Tick**: Check plan -> auto-run `e` if empty -> implement top task via `n` -> run `{x}` gates (`t → f → c → r`).
4. **Safety**: Halt loop if test repair fails 3 times or milestone completed.

| Violation | Mandatory Action |
|:---|:---|
| Bash sleep in shell | Use native `schedule` cron tool. |
| Continue with failing tests | Pause loop and alert user. |
| Stop when plan empty | Auto-run `e` to replenish plan. |

## Verification
- [ ] Schedule registered; ticks produce green logs.
