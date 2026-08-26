# Git Submodule Integration Guide

Integrate `autonomous-coding-agents` into any repository as a git submodule to run the `inex` continuous evolution workflow.

---

## 1. Setup

```bash
git submodule add https://github.com/<org>/autonomous-coding-agents.git autonomous-coding-agents
git submodule update --init --recursive
```

---

## 2. Host `AGENTS.md` Template

Place this in the **host repository root** as `AGENTS.md`:

```markdown
# Agent Instructions

> **Primary Reference**: Follow all agent workflows, rules, and quality gates detailed in [autonomous-coding-agents/AGENTS.md](./autonomous-coding-agents/AGENTS.md).

## Strict Rule: Submodule Immutability
- **NEVER edit, create, or delete files inside the git submodule directory (`autonomous-coding-agents/`).** All project files, documentation, and plans must reside in the root repository.
```

---

## 3. Host Structure & Path Rules

```text
host-repo/
├── AGENTS.md                          # References submodule/AGENTS.md
├── autonomous-coding-agents/          # Git Submodule (IMMUTABLE / READ-ONLY)
│   ├── AGENTS.md
│   └── skills/                        # Shared skills loaded by host agent
├── docs/prd/                          # Host project PRD
├── plans/                             # Host focus.md & next-enhancements.md
└── src/                               # Host application code
```

- **Scope**: All builds (`n`), replanning (`e`), code, and plans belong strictly in the host repository.
- **Skills**: Resolved from `./autonomous-coding-agents/skills/<skill-name>/SKILL.md`.
- **Immutability**: The `autonomous-coding-agents/` directory is strictly read-only.
