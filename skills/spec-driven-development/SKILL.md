---
name: spec-driven-development
description: Synthesize research into authoritative PRDs before coding.
stage: 1-define
trigger: i
---

# Spec-Driven Development (`i`)

## Directives
1. **Mode**: Plan Mode + smart reasoning model.
2. **Context**:
   - Brownfield: Scan code -> audit `docs/deep-research/codebase-analysis.md`.
   - Greenfield: 4-pillar interview (`1a, 2a`) -> `docs/deep-research/requirements-interview.md` or ingest external research.
3. **PRD**: Write `docs/prd/prd.md` (<256 LOC) or `docs/prd/<domain>/<topic>.md`.
4. **Seed Plan**: Author 3 tasks in `plans/next-enhancements.md` (Task 1 = baseline smoke test if brownfield).

| Violation | Mandatory Action |
|:---|:---|
| Skip PRD | Write and verify `docs/prd/` first. |
| Use fast model for PRD | Use Plan Mode with deep reasoning. |

## Verification
- [ ] `docs/prd/` created.
- [ ] `plans/next-enhancements.md` seeded from PRD.
