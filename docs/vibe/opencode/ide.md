# Vibe Coding with OpenCode IDE

OpenCode IDE is an open-source development editor featuring embedded workspace agents. It enables developers to execute repository tasks within an interactive development environment.

## 🚀 How to Execute the Workflows

### 1. Opening the AI Workspace Panel
1. Open the repository inside OpenCode IDE.
2. Open the built-in AI panel.

### 2. Prompting the Workspace Agent
1. Reference `AGENTS.md` by tagging it in the chat panel.
2. Enter the lifecycle trigger prompt:
   * **Bootstrap**: `"Operate in Plan Mode with high reasoning: ingest docs/deep-research/, author docs/prd/, and bootstrap repository per AGENTS.md ('i')"`
   * **Enhancement Planning**: `"Trigger enhance ('e') defined in AGENTS.md"`
   * **Task Execution**: `"Trigger next enhancement ('n') defined in AGENTS.md"`
   * **Milestone / Migration**: `"Trigger milestone ('m') defined in AGENTS.md"`

3. The agent will scan the files, propose the changes adhering to relative paths and sub-folder nesting, and execute terminal tasks (such as tests and builds).
4. Review the edits in the source control panel and commit once verified.
