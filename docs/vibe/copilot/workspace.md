# Copilot Workspace Quick Reference

Cloud-hosted task-centric development agent.

## 🚀 Workflows

### 1. Launch Session
1. Open repo in **GitHub Copilot Workspace**.
2. Reference lifecycle triggers in task input:
   * `"In Plan Mode with high reasoning: ingest docs/deep-research/, draft docs/prd/, bootstrap per AGENTS.md ('i')"`
   * `"Read AGENTS.md, plan enhancements in plans/next-enhancements.md ('e')"`
   * `"Read AGENTS.md, build next tasks ('n' / 'n3')"`
   * `"Read AGENTS.md, execute milestone phase ('m')"`

### 2. Execution & Review
* **Plan & Spec**: Ingest research; align with `docs/features/` & `[DECISION]` records.
* **Diff Review**: Inspect diffs; enforce ≤256 LOC per file and domain sub-folders.
* **Sandbox Verification**: Run containerized build and test commands before PR merge.

