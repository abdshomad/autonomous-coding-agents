---
name: spec-driven-development
description: Synthesize research into authoritative PRDs before coding.
stage: 1-define
trigger: i
---

# Spec-Driven Development (`i`)

## Directives
1. **Mode**: Plan Mode + smart reasoning model.
2. **Clarify First**: Auto-invoke `skills/grill-me/` interview (via `ask_question` modal or `1a, 2a` batching) to stress-test requirements and resolve design tree before PRD generation.
3. **Context**:
   - Brownfield: Scan code -> audit `docs/deep-research/codebase-analysis.md`.
   - Greenfield / Enhancements: `grill-me` interview -> `docs/deep-research/requirements-interview.md` or ingest external research.
4. **PRD**: Write `docs/prd/prd.md` (<256 LOC) or `docs/prd/<domain>/<topic>.md`.
5. **Seed Plan**: Author 3 tasks in `plans/next-enhancements.md` (Task 1 = baseline smoke test if brownfield).

| Violation | Mandatory Action |
|:---|:---|
| Skip PRD | Write and verify `docs/prd/` first. |
| Skip grill-me clarification | Run `/grill-me` interview before drafting PRD. |
| Use fast model for PRD | Use Plan Mode with deep reasoning. |

## Verification
- [ ] `docs/prd/` created.
- [ ] `plans/next-enhancements.md` seeded from PRD.
