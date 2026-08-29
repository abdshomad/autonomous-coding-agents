# Antigravity CLI Quick Reference

Orchestrate autonomous agent loops directly in terminal.

## 🚀 Triggers & Commands

### 1. Autonomous Goals (`/goal`)
* **Init (`i`)**: `/goal Read AGENTS.md, ingest docs/deep-research/, build docs/prd/, scaffold (trigger 'i')`
* **Plan (`e`)**: `/goal Read AGENTS.md, generate plans/next-enhancements.md (trigger 'e')`
* **Next (`n` / `n3`)**: `/goal Read AGENTS.md, execute next 3 tasks (trigger 'n3')`
* **Xtend (`{x}`)**:
  * `r` (Review): `/goal Audit code & security per AGENTS.md (trigger 'r')`
  * `m` (Migrate): `/goal Move completed tasks from plans/next-enhancements.md to docs/features/ (trigger 'm')`
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

### 5. Plugins: Ponytail Suite (`agy plugin`)
* **Install**: `agy plugin install https://github.com/DietrichGebert/ponytail` (or `.agents/plugins/ponytail/`)
* `/ponytail [lite|full|ultra|off]` — Configure/inspect code-laziness intensity (default: `full`).
* `/ponytail-review` — Review git diff for over-engineering; outputs delete-list.
* `/ponytail-audit` — Full repository scan for dead code, bloat, redundant packages.
* `/ponytail-debt` — Harvest deferred shortcuts into `issues/debt-ledger.md`.
* `/ponytail-gain` — Render efficiency scoreboard (LOC saved, packages pruned).
* `/ponytail-help` — Ponytail command quick reference card.

### 6. Plugins: Caveman Suite (`agy plugin`)
* **Install**: `agy plugin install https://github.com/JuliusBrussee/caveman` (or `.agents/plugins/caveman/`)
* `/caveman [lite|full|ultra|off]` — Configure/inspect token compression mode (default: `full`).
* `/caveman-commit` — Generate ≤ 50 char conventional commit message.
* `/caveman-review` — Output 1-line micro-feedback on active diff/PR.
* `/caveman-stats` — Render cumulative token savings scoreboard.
* `/caveman-help` — Caveman command quick reference card.

### 7. Plugins: Gauntlet Loop Suite (`agy plugin`)
* **Install**: `agy plugin install https://github.com/robonuggets/gauntlet-loop` (or `duolahypercho/gauntlet-loop`)
* `/gauntlet` (alias: `/gauntlet-loop`) — Run high-assurance Builder-Critic adversarial verification loop.

### 8. Plugins: How Architecture Suite (`agy plugin`)
* **Install**: `agy plugin install https://github.com/poteto/how` (or `.agents/plugins/how/`)
* `/how <topic>` — Generate structured architectural explanation and subsystem file map.

### 9. Plugins: Archify Diagramming Suite (`agy plugin`)
* **Install**: `agy plugin install https://github.com/tt-a1i/archify` (or `.agents/plugins/archify/`)
* `/archify <target>` — Generate verifiable visual SVG/HTML diagrams in `docs/features/<domain>/diagrams/`.
* `/archify --delta` — Trace and compare visual architecture deltas across commits.

### 10. Plan Mode & Pro Models
* Use Plan Mode with highest reasoning budget for research (`docs/deep-research/`) and PRD (`docs/prd/`).







