---
name: how
description: Architectural explanation and rapid codebase orientation engine for unfamiliar subsystems.
---

# How Skill: Architectural Orientation & Deep Research

Provide structured, senior-level architectural explanations for unfamiliar subsystems before writing PRD.

---

## ⚡ Command Invocation (`/how <topic>`)

- Usage: `/how <subsystem|module|library>`
- Delegation: Spawn `research` subagent via `invoke_subagent` for multi-file codebase scans.

---

## 📋 Standard Output Schema (≤ 50 LOC)

```markdown
### 🧭 Architectural Map: <Subsystem>

1. **Mental Model**: High-level purpose & core abstractions.
2. **Execution Flow**: Dataflow from entry point to persistence/UI.
3. **File Map**:
   - `path/to/entry.ext`: Primary dispatcher.
   - `path/to/handler.ext`: Core business logic.
4. **Invariants & Gotchas**: Critical contracts, failure modes, subtle traps.
```

---

## 🛡️ Guidelines

- Use strictly root-relative paths.
- Avoid generic prose; focus on non-obvious design decisions.
- Keep output compact and high-signal (Caveman concision).
