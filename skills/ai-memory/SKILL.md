---
name: ai-memory
description: Persistent long-term memory wiki, architectural decision tracking, and cross-agent handoffs.
stage: 1-define
trigger: i / /ai-memory / m
---

# ai-memory Skill: Persistent Long-Term Memory & Handoffs

`ai-memory` maintains a git-versioned markdown knowledge wiki (`.ai-memory/`) across agent sessions, recording architectural decisions, gotchas, procedures, and cross-session handoffs.

---

## ⚡ Command Invocation (`/ai-memory <command>`)

- Usage:
  - `/ai-memory query <term>`: Search memory wiki for decisions, gotchas, rules.
  - `/ai-memory remember <category> <title> <content>`: Record a new decision or gotcha.
  - `/ai-memory handoff`: Read or update cross-agent handoff summary.
  - `/ai-memory finalize`: Consolidate session memory upon task completion.
  - `scripts/ai-memory.sh doctor`: Check marker file and storage health.

---

## 📋 Memory Categories

| Category | Purpose | Example |
|:---|:---|:---|
| `_rules` | Standing invariants & personal rules | `_rules/submodule-immutability.md` |
| `decisions` | Architectural Decision Records (ADRs) | `decisions/storage-engine.md` |
| `procedures` | Standard operational workflows | `procedures/release-gating.md` |
| `gotchas` | Non-obvious failure modes & pitfalls | `gotchas/windows-path-separators.md` |
| `handoffs` | Cross-session context transfer | `handoffs/latest.md` |

---

## 🛡️ Lifecycle Integration

- **Stage 1 (Define: `i` / `init`)**: Query memory wiki (`scripts/ai-memory.sh query`) for decisions before authoring PRDs.
- **Stage 6 (Ship: `d` / `m`)**: Consolidate session context (`scripts/ai-memory.sh finalize`) and persist new decisions alongside `docs/features/`.
