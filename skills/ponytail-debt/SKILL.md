---
name: ponytail-debt
description: Harvest deferred shortcuts and temporary simplifications into issues/debt-ledger.md.
---

# Ponytail Debt Skill: Shortcut Ledger

Harvest deferred shortcuts across code comments (`ponytail: <deferred task>`) and sync to `issues/debt-ledger.md`.

---

## 🌾 Harvesting Protocol

1. **Grep Pattern**: Scan codebase for `ponytail:`, `TODO(ponytail):`, or deferred shortcuts.
2. **Ledger Update**: Append/sync entries to `issues/debt-ledger.md` with file location, rationale, and follow-up condition.
3. **Prune**: Remove resolved entries when refactored or superseded.

---

## 📝 Ledger Format (`issues/debt-ledger.md`)

```markdown
# Ponytail Technical Debt Ledger

| ID | File Path | Shortcut Taken | Proper Fix Condition | Priority |
|:---|:---|:---|:---|:---|
| `D-001` | `src/utils.ts:L42` | Inlined regex parsing | Extract when format expands | `[P2]` |
```
