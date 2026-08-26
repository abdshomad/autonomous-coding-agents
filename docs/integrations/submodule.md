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

> [!CAUTION]
> ### 🛑 ZERO SUBMODULE MUTATION RULE (NON-NEGOTIABLE)
> **All Git Submodules (current and future, registered in `.gitmodules` or embedded in the workspace) are 100% READ-ONLY.**
> - **NEVER** use `write_to_file`, `replace_file_content`, or shell commands to create, modify, or delete files inside any git submodule.
> - **ALL** customizations, wrappers, Cordis overlay patches (`patches/<submodule-name>/`), runner scripts (`scripts/`), proxy middleware, and configs must reside exclusively in the **parent workspace root**.
> - If submodule behavior must change, use **parent overlay patches (`patches/<submodule-name>/`)**, **wrapper scripts (`scripts/`)**, or dynamic injection at runtime from the root. Submodule `git status` MUST always remain `clean`.
```

---

## 3. Host Structure & Path Rules

```text
host-repo/
├── AGENTS.md                          # References submodule/AGENTS.md with Zero Mutation Rule
├── autonomous-coding-agents/          # Git Submodule (IMMUTABLE / READ-ONLY)
│   ├── AGENTS.md
│   └── skills/                        # Shared skills loaded by host agent
├── patches/                           # Parent overlay patches (runtime injected)
│   └── autonomous-coding-agents/      # Minimal file patches mirroring relative paths
├── scripts/                           # Parent runner scripts & wrapper middleware
├── docs/prd/                          # Host project PRD
├── issues/                            # Host numbered blocking issues (001-<topic>.md)
├── plans/                             # Host focus.md & next-enhancements.md
├── screenshots/                       # Visual step screenshots (GITIGNORED)
├── src/                               # Host application code
├── tests/                             # Automated test scripts (unit/integration/e2e)
├── .env.local                         # Development config (dev/debug/mock)
├── .env.production                    # Production config (cloud/db)
└── .secrets                           # Dev credentials & API tokens (GITIGNORED)
```

- **Scope**: All builds (`n`), tests (`tests/`), visual captures (`screenshots/`), replanning (`e`), code, plans, configs, `.secrets`, overlay patches (`patches/`), runner scripts (`scripts/`), and `issues/` belong strictly in the host repository.
- **Skills**: Resolved from `./autonomous-coding-agents/skills/<skill-name>/SKILL.md`.
- **Zero Submodule Mutation**: All embedded submodules are strictly 100% read-only. Store overrides in `patches/<submodule-name>/` mirroring relative paths and runner scripts in `scripts/`. Submodule `git status` MUST always remain clean.
- **Brownfield / Existing Code**: In host repos with pre-existing code, `i` scans features into `docs/deep-research/codebase-analysis.md` and seeds Task 1 as *Baseline Run & Smoke Test* to verify the app runs green before building new features.
