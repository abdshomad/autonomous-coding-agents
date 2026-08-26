# Submodule Integration Guide

Embed `autonomous-coding-agents` as a git submodule to run the `inex` workflow.

## 1. Setup
```bash
git submodule add https://github.com/<org>/autonomous-coding-agents.git autonomous-coding-agents
git submodule update --init --recursive
```

## 2. Host `AGENTS.md` Template
Place in host root as `AGENTS.md`:
```markdown
# Agent Instructions
> **Workflow**: Follow [autonomous-coding-agents/AGENTS.md](./autonomous-coding-agents/AGENTS.md).
> [!CAUTION]
> **Submodule Immutability**: Submodules 100% READ-ONLY. Zero mutations. Store diffs in parent `patches/<submodule-name>/`, wrappers in `scripts/`, runtime inject. Keep submodule `git status` clean.
```

## 3. Host Structure
```text
host-repo/
├── AGENTS.md                          # References submodule/AGENTS.md
├── autonomous-coding-agents/          # Submodule (100% READ-ONLY)
│   ├── AGENTS.md
│   └── skills/                        # Shared skills
├── patches/autonomous-coding-agents/  # Parent overlay patches
├── scripts/                           # Parent runners & wrappers
├── docs/prd/                          # Host PRD
├── issues/                            # Blockers (001-<topic>.md)
├── plans/                             # focus.md & next-enhancements.md
├── screenshots/                       # Step captures (gitignored)
├── src/ / tests/                      # Application code & tests
└── .env.local / .secrets              # Configs & secrets (gitignored)
```

## 4. Rules
* **Host Scope**: All code, builds, tests, screenshots, plans, secrets live strictly in host root.
* **Submodule Immutability**: Never mutate submodule files directly. Use `patches/<submodule-name>/` and `scripts/`.
* **Brownfield**: Pre-existing code triggers `i` scan into `docs/deep-research/codebase-analysis.md` with Task 1 as *Baseline Run & Smoke Test*.
