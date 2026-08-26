# Feature Documentation & User Decisions

Minimalist registry of platform capabilities and authoritative user decisions.

---

## 🎯 The Rule (When & How to Document)

- **When to Document**: Only when adding a new user-facing capability, changing an architectural contract, or recording an authoritative user decision (`[DECISION]`). Skip for internal refactors and bug fixes.
- **Where to Document**: `docs/features/<domain>/<topic>.md` using relative paths only.
- **Length Constraint**: Strictly ≤50 lines per topic file.

---

## 📋 Micro-Bullet Template (3–5 Bullets Max)

Every `docs/features/<domain>/<topic>.md` file must strictly follow this minimalist format:

```markdown
# <Topic Name>

- **Capability**: <1-line summary of what it does>.
- **Key Files**: [`path/to/file.ts`](../../path/to/file.ts), [`tests/path/to/test.ts`](../../tests/path/to/test.ts)
- **Contract / Decision**: `[DECISION]` <authoritative, immutable decision or contract, if any>.
```

---

## 🗂️ Domain Index

* [core/architecture.md](core/architecture.md): Core platform architecture, engine design, and environment contracts.
