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

## Strict Rule: Submodule Immutability & Patch Policy
- **NEVER edit, create, or delete files inside any git submodule directory (`autonomous-coding-agents/`).** All project files, documentation, and plans must reside in the root repository.
- **File Patches**: When changes to submodule behavior are required, use minimal file patches saved into `{sub-module-repo}-patches/` mirroring relative paths (e.g. `autonomous-coding-agents-patches/src/utils/helpers.patch`).
- **Runtime Injection**: Patches are applied/injected dynamically during execution—never modify submodule files in the on-disk git working tree.
```

---

## 3. Host Structure & Path Rules

```text
host-repo/
├── AGENTS.md                          # References submodule/AGENTS.md
├── autonomous-coding-agents/          # Git Submodule (IMMUTABLE / READ-ONLY)
│   ├── AGENTS.md
│   └── skills/                        # Shared skills loaded by host agent
├── autonomous-coding-agents-patches/  # Minimal file patches mirroring relative paths (runtime injected)
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

- **Scope**: All builds (`n`), tests (`tests/`), visual captures (`screenshots/`), replanning (`e`), code, plans, configs, `.secrets`, patches, and `issues/` belong strictly in the host repository.
- **Skills**: Resolved from `./autonomous-coding-agents/skills/<skill-name>/SKILL.md`.
- **Immutability & Patches**: The `autonomous-coding-agents/` directory is strictly read-only. Store overrides in `{sub-module-repo}-patches/` mirroring relative paths and inject at runtime.
- **Brownfield / Existing Code**: In host repos with pre-existing code, `i` scans features into `docs/deep-research/codebase-analysis.md` and seeds Task 1 as *Baseline Run & Smoke Test* to verify the app runs green before building new features.
