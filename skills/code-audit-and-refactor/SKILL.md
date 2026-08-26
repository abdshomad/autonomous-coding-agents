---
name: code-audit-and-refactor
description: Enforce 256 LOC refactoring, relative paths, and decision adherence.
stage: 5-review
trigger: c / r
---

# Code Audit & Refactor (`c` / `r`)

## Directives
1. **LOC Limit (`c`)**: Split any file exceeding 256 LOC into domain sub-files.
2. **Paths**: Enforce relative paths across imports, links, scripts.
3. **Decisions (`r`)**: Audit against `docs/features/` `[DECISION]` records. Never weaken user decisions.
4. **Submodules**: Ensure clean `git status` (0 modifications). Verify patches live in `patches/<submodule>/`.
5. **Feature Log**: Document new capabilities in `docs/features/<domain>/<topic>.md` (≤50 LOC).

| Violation | Mandatory Action |
|:---|:---|
| File >256 LOC | Split into modular domain sub-files. |
| Modify submodule | Revert changes; move overrides to `patches/` & `scripts/`. |
| Revert user choice | Preserve `[DECISION]` tags strictly. |

## Verification
- [ ] No file exceeds 256 LOC; submodules 100% clean; feature logged in `docs/features/`.
