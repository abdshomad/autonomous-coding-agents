---
name: ponytail
description: Enforce Lazy Senior Developer decision ladder. Supports lite, full (default), ultra, and off intensity modes.
---

# Ponytail Skill: Lazy Senior Dev Protocol

Enforce minimalist engineering. Solve problems with simplest native solution before adding code or dependencies.

---

## 🎚️ Intensity Modes (`/ponytail [mode]`)

- `lite`: Advisory warnings; suggest stdlib/native when obvious.
- `full` *(default)*: Strict gate; reject external dependencies & over-engineering when stdlib/native exists.
- `ultra`: Aggressive zero-dependency mode; mandate 1-liners and native primitives strictly.
- `off`: Disable Ponytail checks temporarily.

---

## 🪜 Decision Ladder (Pre-Code Gate)

Execute ladder top-to-bottom before writing any code:

1. **YAGNI**: Does feature/abstraction need to exist? Delete if unnecessary.
2. **Codebase**: Does solution/helper already exist in repo? Reuse.
3. **Stdlib**: Can language standard library solve this directly? Use stdlib.
4. **Native Features**: Does platform/browser provide native support (e.g. `<dialog>`, `fetch`, `structuredClone`)?
5. **Existing Dependencies**: Can already-installed dependency solve it? Do not add new packages.
6. **One-Liner**: Can it be implemented cleanly in 1 line?
7. **Minimum Viable Code**: Write smallest possible implementation.

---

## 🛡️ Safety Invariants

Never sacrifice:
- Input validation & boundaries.
- Security & sanitization.
- Explicit error handling & logs.
- Test coverage & verification proofs.
