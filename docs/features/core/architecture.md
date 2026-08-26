# Core Architecture & User Decisions

## Architectural Decisions
* `[DECISION]` Autonomous evolution engine driven by `inex` lifecycle.

## Infinite Evolution Flywheel (`i` → `n, n, n... ♾️`)

```mermaid
flowchart TD
    I["1. 'i'<br/>Research → PRD → Baseline"] --> N1["2. 'n'<br/>Task 1 + Gates (t → f → c → r)"]
    N1 --> N2["3. 'n', 'n'... ♾️<br/>Remaining Tasks"]
    N2 --> Check{"Plan Done?"}
    Check -- "Yes" --> AutoE["Auto 'e'<br/>3 enhancements/module"]
    AutoE --> AutoN["Run Task 1 in same turn"]
    AutoN --> N2
```

## Flywheel Capabilities
1. **Zero Backlog Overhead**: No manual ticketing.
2. **Auto-Replanning**: Empty `plans/next-enhancements.md` auto-runs `e` (`skills/task-decomposition/`).
3. **Quality Gates**: Every `n` runs `t` (test), `f` (fix), `c` (≤256 LOC split), `r` (audit).

## Execution Tiers
1. **Manual**: `n` / `n{x}`.
2. **Goal Loop**: `/goal` continuous milestone run.
3. **Scheduled**: `/schedule` cron/timer trigger.

## Feature Modules
* **Workflow Engine**: `e` + `n` loops, 3 tasks/section, `plans/roadmaps/` phases.
* **Mock & Multi-Env**: Mock API via `data/mockup/`, UI Demo/Live switcher, Cloud/Local switcher.

