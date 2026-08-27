---
name: cyclomatic-complexity
description: Measure and refactor code to reduce cyclomatic complexity (CC ≤10).
stage: 5-review
trigger: c / r
---

# Cyclomatic Complexity (`c` / `r`)

## Directives
1. **Metric**: CC = decision points + 1 (`if`, `else if`, `case`, loops, `catch`, ternary, `&&`, `||`).
2. **Thresholds**:
   - `CC ≤ 10`: Acceptable.
   - `CC 11–15`: Mandatory refactoring during `c`.
   - `CC > 15`: Hard gate failure (must split/refactor immediately).
3. **Tools**: Use project tools (`radon cc`, `eslint`, `gocyclo`, `lizard`) or manual count.
4. **Refactor Tactics (Priority Order)**:
   - Guard clauses (invert condition, early return).
   - Extract function (single responsibility, self-documenting name).
   - Lookup table / dictionary mapping instead of branching chains.
   - Named predicates (`if (isValid(x))` vs complex booleans).
   - Polymorphism / strategy pattern for repeated type switches.
   - Flatten loops (extract body, use `continue`).
5. **Anti-Gaming**: Do not replace honest branches with dense nested one-liners. Preserve behavior, verify tests.

| Violation | Mandatory Action |
|:---|:---|
| Function CC 11–15 | Refactor into modular helpers / guard clauses. |
| Function CC >15 | Hard block: split into smaller sub-units immediately. |
| Masked complexity | Reject compressed one-liners; extract well-named units. |
| Behavior drift | Run test suite (`t`) before and after refactoring. |

## Reporting
Output compact table when refactoring:
```text
| Function | Before | After | Tactics Applied |
|:---|:---|:---|:---|
| parseConfig | 14 | 4 | Guard clauses, extract validateRules |
```

## Verification
- [ ] All functions touched meet `CC ≤ 10`; tests pass (`t`); zero behavior drift.
