# ai-memory Integration Guide

Persistent long-term memory wiki, cross-agent handoffs, and architectural decision tracking embedding `akitaonrails/ai-memory`.

---

## 1. Overview
`ai-memory` maintains a git-versioned markdown wiki (`.ai-memory/`) across agent sessions. It allows pausing in one coding agent (e.g. Claude Code, Codex) and resuming in another (e.g. Antigravity CLI) with persistent architectural context, gotchas, and handoffs intact.

---

## 2. Configuration (`.ai-memory.toml`)
```toml
[workspace]
name = "autonomous-coding-agents"
storage_path = ".ai-memory"

[project]
name = "inex-core"
description = "Autonomous Coding Agents & inex Lifecycle Framework"

[capture]
ignore_paths = [".git", "node_modules", ".graphify", ".secrets", "submodules"]

[slots]
per_user = false

[wiki]
categories = ["_rules", "decisions", "procedures", "gotchas", "handoffs"]
```

---

## 3. Command Usage & Lifecycle Integration

```bash
# Initialize persistent memory directory
scripts/ai-memory.sh init

# Query persistent memory for decisions/rules
scripts/ai-memory.sh query "submodule"

# Record a new architectural decision or gotcha
scripts/ai-memory.sh remember decisions "Memory Wiki" "Persisted in .ai-memory/ as Markdown"

# Generate or read latest cross-agent handoff
scripts/ai-memory.sh handoff "Handoff notes"

# Finalize session memory upon completion
scripts/ai-memory.sh finalize --agent antigravity

# Run diagnostic checks
scripts/ai-memory.sh doctor
```

---

## 4. Submodule Immutability Rules
* `submodules/ai-memory/` is 100% read-only.
* Modifications and overlays are stored in `patches/ai-memory/`.
* Execution is driven via `scripts/ai-memory.sh` and `skills/ai-memory/SKILL.md`.
