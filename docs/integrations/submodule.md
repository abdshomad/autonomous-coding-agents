# Submodule Integration Guide

Embed `autonomous-coding-agents` and its modular skill ecosystem as 100% read-only Git submodules.

---

## 1. Submodule Ecosystem Matrix (9 Submodules)

| Skill / Plugin | Submodule Path | Upstream Repository |
|:---|:---|:---|
| `ai-memory` | `submodules/ai-memory` | `https://github.com/akitaonrails/ai-memory.git` |
| `archify` | `submodules/archify` | `https://github.com/tt-a1i/archify.git` |
| `caveman` | `submodules/caveman` | `https://github.com/JuliusBrussee/caveman.git` |
| `gauntlet-loop` | `submodules/gauntlet-loop` | `https://github.com/robonuggets/gauntlet-loop.git` |
| `graphify` | `submodules/graphify` | `https://github.com/Graphify-Labs/graphify.git` |
| `how` | `submodules/how` | `https://github.com/poteto/how.git` |
| `no-mistakes` | `submodules/no-mistakes` | `https://github.com/kunchenguid/no-mistakes.git` |
| `ponytail` | `submodules/ponytail` | `https://github.com/DietrichGebert/ponytail.git` |
| `unlazy` | `submodules/unlazy` | `https://github.com/Leonxlnx/unlazy.git` |

---

## 2. Synchronization & Health Check

```bash
# Initialize and sync all 9 submodules
scripts/submodules-sync.sh sync

# Verify health, tracking, and clean immutability status
scripts/submodules-sync.sh check

# Display submodule commit matrix
scripts/submodules-sync.sh status
```

---

## 3. Three-Tiered Immutability Architecture
* **Tier 1 (Upstream)**: `submodules/<name>/` is 100% read-only.
* **Tier 2 (Patches)**: `patches/<name>/` stores unified diff overlays.
* **Tier 3 (Runners & Skills)**: `scripts/<name>.sh` wraps execution; `.agents/plugins/<name>/` defines agent contracts.
