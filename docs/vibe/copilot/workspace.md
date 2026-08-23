# Vibe Coding with GitHub Copilot Workspace

GitHub Copilot Workspace is a web-based, task-centric agent environment that allows developers to brainstorm, design, build, and test enhancements within a cloud-hosted environment.

## 🚀 How to Execute Workflows

### 1. Initializing the Session
1. Navigate to the repository on GitHub.
2. Open Copilot Workspace by clicking **Open in Copilot Workspace** on a branch, issue, or pull request.
3. Prompt the workspace referencing the lifecycle triggers:
   * `"In Plan Mode with high reasoning: ingest docs/deep-research/, draft docs/prd/, and bootstrap repository per AGENTS.md (trigger 'i')"`
   * `"Read AGENTS.md and create enhancement plan (trigger 'e')"`
   * `"Read AGENTS.md and execute the next enhancement task (trigger 'next')"`
   * `"Read AGENTS.md and execute roadmap milestone (trigger 'm')"`

### 2. Planning, Implementing, and Validating
1. **Brainstorming & Specification**: Copilot operates in **Plan Mode** to ingest `docs/deep-research/`, draft the PRD in `docs/prd/`, and generate structured specifications adhering to `docs/features/` and `[DECISION]` records.

2. **Reviewing Code Drafts**: Copilot will present a side-by-side diff of the changes across files, ensuring all new files remain under 256 LOC and use appropriate sub-folder nesting.
3. **Containerized Build and Test**: Copilot will run terminal commands (such as builds and tests) in its sandbox to verify the changes. You can edit the test scripts or command executions directly from the UI.

