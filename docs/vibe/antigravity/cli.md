# Antigravity CLI Quick Reference

Orchestrate autonomous agent loops directly in terminal.

## 🚀 Triggers & Commands

### 1. Autonomous Goals (`/goal`)
* **Init (`i`)**: `/goal Read AGENTS.md, ingest docs/deep-research/, build docs/prd/, scaffold (trigger 'i')`
* **Plan (`e`)**: `/goal Read AGENTS.md, generate plans/next-enhancements.md (trigger 'e')`
* **Next (`n` / `n3`)**: `/goal Read AGENTS.md, execute next 3 tasks (trigger 'n3')`
* **Xtend (`{x}`)**:
  * `r` (Review): `/goal Audit code & security per AGENTS.md (trigger 'r')`
  * `m` (Milestone): `/goal Execute roadmap phase in plans/roadmaps/ (trigger 'm')`
  * `t` (Test) / `f` (Fix) / `c` (Clean ≤256 LOC) / `d` (Deploy)

### 2. Interval Loop (`/loop`)
* `/loop 5m` — Loop `n` every 5m indefinitely.
* `/loop 10m max=6` — Loop `n` every 10m, cap at 6 iterations.
* `/loop 15m until=phase1` — Loop `n` until Phase 1 roadmap completes.

### 3. Native Schedules (`/schedule`)
* Cron: `/schedule CronExpression="0 9 * * *" Prompt="trigger 'n'"`
* Timer: `/schedule DurationSeconds=300 Prompt="Verify build health"`

### 4. Interactive Interview (`/grill-me`)
* `/grill-me <topic>` — Interactive alignment before major architectural steps.

### 5. Plan Mode & Pro Models
* Use Plan Mode with highest reasoning budget for research (`docs/deep-research/`) and PRD (`docs/prd/`).

