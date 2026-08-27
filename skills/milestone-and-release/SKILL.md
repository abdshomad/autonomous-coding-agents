---
name: milestone-and-release
description: Migrate completed enhancements to feature docs and coordinate releases.
stage: 6-ship
trigger: d / m
---

# Feature Migration & Release (`d` / `m`)

## Directives
1. **Migrate Features (`m`)**:
   - Find all `[DONE]` tasks in `plans/next-enhancements.md`.
   - If 0 done tasks, report 0 moved and prompt user to run `n`.
   - Group and append moved tasks into `docs/features/<domain>/<topic>.md` (≤50 LOC/topic).
   - Update `docs/features/README.md` index.
   - Prune moved `[DONE]` tasks from `plans/next-enhancements.md`.
   - If plan/module empty, auto-trigger `e` (`skills/task-decomposition/`).
2. **Environment Switchers (`d`)**: Ensure Cloud vs Local and Demo vs Live (`data/mockup/`) switchers work.
3. **Packaging & Release (`d`)**: Package production builds; generate release notes; manage roadmaps in `plans/roadmaps/`.

| Violation | Mandatory Action |
|:---|:---|
| Leave `[DONE]` tasks unpruned on `m` | Remove moved tasks from `plans/next-enhancements.md`. |
| Empty plan after `m` without replan | Auto-trigger `e` to replenish tasks. |
| Hardcode URLs | Use runtime environment switcher (Cloud vs Local). |

## Verification
- [ ] `[DONE]` tasks migrated to `docs/features/`; `plans/next-enhancements.md` pruned/replenished; `docs/features/README.md` indexed.
