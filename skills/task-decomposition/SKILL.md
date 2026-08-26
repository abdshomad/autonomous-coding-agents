---
name: task-decomposition
description: Decompose PRD into exactly 3 enhancement tasks per module.
stage: 2-plan
trigger: e / focus: / unfocus
---

# Task Decomposition (`e`)

## Directives
1. **Focus Check**: If `plans/focus.md` has `[FOCUS]: <dir>`, prioritize for 1 batch. If complete/reset, set `[FOCUS]: none`.
2. **Read PRD**: Ingest `docs/prd/`, `docs/features/`, and existing code state.
3. **Decompose**: Author **exactly 3 tasks per module** in `plans/next-enhancements.md` (`[TODO]`, unique IDs `1.1`, `1.2`, `1.3`).

| Violation | Mandatory Action |
|:---|:---|
| Ignore `plans/focus.md` | Prioritize `[FOCUS]` directives. |
| Non-3 task count | Always output exactly 3 tasks per section. |
| Vague tasks | Anchor each task in explicit PRD specifications. |

## Verification
- [ ] Exactly 3 `[TODO]` tasks per section in `plans/next-enhancements.md`.
