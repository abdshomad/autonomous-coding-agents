---
name: caveman-help
description: Quick reference card for all Caveman commands, compression modes, and lifecycle integration.
---

# Caveman Help & Command Reference

Quick reference for Caveman token-compression commands.

---

## ⚡ Command Catalog

| Command | Args | Purpose | Stage / Hook |
|:---|:---|:---|:---|
| `/caveman` | `[lite\|full\|ultra\|off]` | Set or inspect output compression intensity (default: `full`). | Output Contract |
| `/caveman-commit` | *none* | Generate ≤ 50 char conventional commit message. | Git / Stage 6 (`d`) |
| `/caveman-review` | *none* | Produce 1-line micro-feedback on active diff/PR. | Stage 5 (`r`) |
| `/caveman-stats` | *none* | Render token savings and compression metrics. | Stage 6 (`m`) |
| `/caveman-help` | *none* | Display this command reference card. | General |
