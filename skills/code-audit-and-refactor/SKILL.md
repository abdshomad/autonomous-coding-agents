---
name: code-audit-and-refactor
description: Enforce 256 LOC refactoring, root-relative paths, and decision adherence.
stage: 5-review
trigger: c / r
---

# Code Audit & Refactor (`c` / `r`)

## Directives
1. **LOC & Complexity Limit (`c`)**: Split files >256 LOC; enforce `CC ≤ 10` per function via `skills/cyclomatic-complexity/SKILL.md`.
2. **Paths**: Enforce root-relative paths (no leading slashes, zero full/absolute paths like `file:///...` or `/...`) across docs, links, imports, scripts.
3. **Decisions (`r`)**: Audit against `docs/features/` `[DECISION]` records. Never weaken user decisions.
4. **Submodules**: Ensure clean `git status` (0 modifications). Verify patches live in `patches/<submodule>/`.
5. **Feature Log**: Document new capabilities in `docs/features/<domain>/<topic>.md` (≤50 LOC).

| Violation | Mandatory Action |
|:---|:---|
| File >256 LOC | Split into modular domain sub-files. |
| Function CC >10 | Refactor into helpers / guard clauses (`skills/cyclomatic-complexity/`). |
| Use absolute/full paths | Convert to root-relative paths (e.g. `docs/...`); ban `/...` or `file:///...`. |
| Modify submodule | Revert changes; move overrides to `patches/` & `scripts/`. |
| Revert user choice | Preserve `[DECISION]` tags strictly. |

## Verification
- [ ] No file exceeds 256 LOC; all functions `CC ≤ 10`; submodules 100% clean; root-relative paths enforced; feature logged in `docs/features/`.
