# Vibe Coding with GitHub Copilot Workspace

GitHub Copilot Workspace is a web-based, task-centric agent environment that allows developers to brainstorm, design, build, and test enhancements within a cloud-hosted environment.

## 🚀 How to Execute Workflows

### 1. Initializing the Session
1. Navigate to the repository on GitHub.
2. Open Copilot Workspace by clicking **Open in Copilot Workspace** on a branch, issue, or pull request.
3. If starting from scratch, prompt the workspace:
   ```text
   Read AGENTS.md and execute the next enhancement task (trigger 'next')
   ```

### 2. Planning, Implementing, and Validating
1. **Brainstorming & Specification**: Copilot will read the workspace, parse `AGENTS.md`, and generate a structured description of the changes. You can refine this description before proceeding.
2. **Reviewing Code Drafts**: Copilot will present a side-by-side diff of the changes across files.
3. **Containerized Build and Test**: Copilot will run terminal commands (such as builds and tests) in its sandbox to verify the changes. You can edit the test scripts or command executions directly from the UI.
