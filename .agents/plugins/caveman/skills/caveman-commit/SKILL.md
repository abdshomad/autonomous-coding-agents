---
name: caveman-commit
description: Generate ultra-concise git commit messages adhering to conventional commits under 50 chars.
---

# Caveman Commit Skill: Micro Git Commits

Produce high-signal, zero-fluff git commit messages.

---

## ⚡ Format Specification

- Standard: `<type>(<scope>): <imperative summary>`
- Length: Strictly ≤ 50 characters for subject line.
- Body: Optional, micro-bullet points only if non-obvious rationale exists.

---

## 📋 Examples

- `feat(auth): add jwt token verification`
- `fix(router): prevent race condition on reload`
- `refactor(db): strip custom query builder for stdlib`
