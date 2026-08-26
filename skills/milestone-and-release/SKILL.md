---
name: milestone-and-release
description: Coordinate multi-phase milestone rollouts and environment releases.
stage: 6-ship
trigger: d / m
---

# Milestone & Release (`d` / `m`)

## Directives
1. **Milestones (`m`)**: Sequentially run phases in `plans/roadmaps/<epic>/`. Verify before advancing.
2. **Environment Switchers (`d`)**: Ensure Cloud vs Local and Demo vs Live (`data/mockup/`) switchers work.
3. **Packaging**: Package production builds; generate release notes.

| Violation | Mandatory Action |
|:---|:---|
| Skip phase verification | Verify phase criteria completely before advancing. |
| Hardcode URLs | Use runtime environment switcher (Cloud vs Local). |

## Verification
- [ ] Roadmap updated in `plans/roadmaps/`; build packages cleanly; switchers verified.
