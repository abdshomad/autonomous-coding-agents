---
name: caveman-review
description: Provide ultra-compact, single-line micro-feedback on pull requests and code diffs.
---

# Caveman Review Skill: Compact PR Review

Deliver telegraphic code review comments without conversational padding.

---

## ⚡ Feedback Format

Each finding strictly 1 line:
`[SEVERITY] <path/to/file:Lxx>: <issue> -> <exact fix recommendation>`

---

## 📋 Examples

- `[BLOCKER] src/api.ts:L34: Unsanitized SQL query -> Use parameterized query.`
- `[WARN] src/utils.ts:L12: Custom debounce duplicate -> Use stdlib/shared helper.`
- `[NIT] src/config.ts:L8: Magic string constant -> Extract named const.`
