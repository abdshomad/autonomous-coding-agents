---
name: test-driven-development
description: Implement tasks via TDD, domain nesting, and relative paths.
stage: 3-build
trigger: n
---

# Test-Driven Development (`n`)

## Directives
1. **Pre-Flight**: If `plans/next-enhancements.md` empty/done, auto-run `e` (`skills/task-decomposition/`).
2. **Select**: Take top `{x}` `[TODO]` task.
3. **TDD**: Write tests in `tests/` alongside feature implementation.
4. **Code**: Modular code in domain sub-folders; ≤256 LOC; root-relative paths only.
5. **Submodules**: Zero mutations. Use `patches/<submodule>/` and `scripts/`.
6. **Quality Gate**: Run `{x}` chain (`t → f → c → r`).

| Violation | Mandatory Action |
|:---|:---|
| Empty plan -> halt | Auto-trigger `e`, generate 3 tasks/module, execute top task. |
| Skip tests | Author test suites before completing task. |
| Monolithic file | Modularize into domain sub-folders (≤256 LOC). |
| Mutate submodule | 100% read-only; use `patches/` and `scripts/`. |

## Verification
- [ ] Task implemented; submodules 100% clean; quality chain (`t/f/c/r`) passed.
