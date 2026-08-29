---
name: ponytail-help
description: Quick reference card for all Ponytail commands, intensity modes, and lifecycle integration points.
---

# Ponytail Help & Command Reference

Quick reference for Ponytail commands integrated into the `inex` workflow.

---

## ⚡ Command Catalog

| Command | Args | Purpose | Stage Mapping |
|:---|:---|:---|:---|
| `/ponytail` | `[lite\|full\|ultra\|off]` | Set or inspect decision ladder intensity level (default: `full`). | Stage 3 (`n`) |
| `/ponytail-review` | *none* | Review active git diff for over-engineering; returns delete-list. | Stage 5 (`r`) |
| `/ponytail-audit` | *none* | Full repository scan for dead code, bloat, and redundant deps. | Stage 5 (`r` full) |
| `/ponytail-debt` | *none* | Harvest deferred shortcuts into `issues/debt-ledger.md`. | Stage 6 (`m`) |
| `/ponytail-gain` | *none* | Render efficiency scoreboard (LOC saved, deps removed). | Stage 6 (`d`/`m`) |
| `/ponytail-help` | *none* | Display this command reference card. | General |
