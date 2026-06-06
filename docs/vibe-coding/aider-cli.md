# Vibe Coding with Aider CLI

Aider is a git-integrated command-line coding assistant that pairs with git. It is highly effective at writing code, running local tests, and auto-committing successful tasks.

## 🚀 How to Execute the CLI Workflow

### 1. Starting Aider and Adding Context
Open a terminal in the root of the repository and launch Aider by adding the required files into its chat context:
```bash
aider /add AGENTS.md
```

### 2. Running the Architect and Auto-Commit Loops
To allow Aider to operate autonomously and verify its changes against your test suites, run Aider with architect mode, auto-commits, and test runner configurations:
```bash
aider --architect --auto-commit --test "npm run test"
```
* **Prompt the Agent**:
  ```text
  Trigger the next enhancement task as specified in AGENTS.md
  ```
* **Execution**: Aider will formulate a plan, write code, run the test script, self-correct if any failures occur, and automatically commit the final changes to git.
