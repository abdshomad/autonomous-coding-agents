# Agent Skills Library (`skills/`)

This directory contains modular, executable engineering skills following the **`inex` Method** and senior engineering practices inspired by Addy Osmani's `agent-skills`.

## 🧭 The 6-Stage Engineering Skills Index

| Stage | Skill Folder | Trigger | Purpose |
|:---|:---|:---|:---|
| **1. Define** | [`spec-driven-development`](spec-driven-development/SKILL.md) | `i` / `init` | Synthesize deep research in `docs/deep-research/` into modular PRDs in `docs/prd/`. |
| **2. Plan** | [`task-decomposition`](task-decomposition/SKILL.md) | `e` / `enhance` | Break PRD requirements into 3 actionable tasks per module in `plans/next-enhancements.md`. |
| **3. Build** | [`test-driven-development`](test-driven-development/SKILL.md) | `n` / `next` | Implement tasks with relative paths, sub-folder nesting, and TDD discipline. |
| **4. Verify** | [`debugging-and-recovery`](debugging-and-recovery/SKILL.md) | `t` / `f` | Execute non-negotiable verification gates and automated root-cause bug repair. |
| **5. Review** | [`code-audit-and-refactor`](code-audit-and-refactor/SKILL.md) | `c` / `r` | Enforce 256 LOC refactoring, security audits, and `[DECISION]` checks. |

| **6. Ship** | [`milestone-and-release`](milestone-and-release/SKILL.md) | `d` / `m` | Execute phase roadmaps in `plans/roadmaps/` and manage Cloud vs Local deployments. |
| **Automation** | [`loop-orchestrator`](loop-orchestrator/SKILL.md) | `/loop` | Automate periodic execution of `n` every `x` minutes with cron scheduling. |


---

## 🛠️ Skill Execution Rules
1. **Verification is Non-Negotiable**: No skill completes without verifiable terminal output.
2. **Anti-Rationalization Compliance**: Agents must adhere to the anti-rationalization tables in each `SKILL.md`.
3. **Relative Paths**: Always use relative paths across all skill executions and imported artifacts.
