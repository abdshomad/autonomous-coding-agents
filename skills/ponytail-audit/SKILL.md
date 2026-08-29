---
name: ponytail-audit
description: Audit whole repository for over-engineering, bloat, and redundant packages, returning a delete-list.
---

# Ponytail Audit Skill: Full Repository Scan

Scan entire codebase (not just git diff) for structural bloat and unnecessary abstractions.

---

## 🔎 Audit Scope

1. **Dependency Analysis**: Identify installed packages replaceable with modern standard library or native APIs.
2. **Structural Redundancy**: Detect custom wrapper classes, premature factories, or pass-through utilities.
3. **Dead Code & Speculative Stubs**: Locate unused functions, unreferenced exports, and dead branches.
4. **File Bloat**: Flag any file > 256 LOC or function CC > 10.

---

## 📋 Delete-List Output

Produce ranked action table:
| Priority | Target Path | Issue / Over-Engineering | Native / Stdlib Replacement | LOC Delta |
|:---|:---|:---|:---|:---|
| `[P0]` | `path/to/file.ext` | Custom HTTP wrapper | Native `fetch` / `urllib` | `-45 LOC` |
