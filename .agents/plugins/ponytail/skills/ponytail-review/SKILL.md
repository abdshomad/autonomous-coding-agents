---
name: ponytail-review
description: Audit codebase and pull requests for over-engineering, bloat, and redundant dependencies.
---

# Ponytail Review Skill: Anti-Overengineering Audit

Audit code against Lazy Senior Developer principles during Stage 5 (`r`/`c`).

---

## 🔍 Audit Checklist

1. **Dependency Audit**: Flag any new dependency solvable via standard library or native APIs.
2. **Abstraction Audit**: Remove unnecessary classes, factories, adapters wrapping single functions.
3. **Boilerplate Reduction**: Refactor multi-line loops/routines into clean stdlib built-ins.
4. **Code Footprint**: Ensure file size ≤ 256 LOC and Cyclomatic Complexity ≤ 10.

---

## ⚡ Refactoring Directives

- Replace custom utilities with stdlib/built-in alternatives immediately.
- Delete unused configurations, dead branches, and speculative hooks (YAGNI).
- Keep tests green; verify proofs in `tests/`.
