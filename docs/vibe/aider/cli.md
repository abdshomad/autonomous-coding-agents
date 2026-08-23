# Vibe Coding with Aider CLI

Aider is a git-integrated command-line coding assistant that pairs with git. It is highly effective at writing code, running local tests, and auto-committing successful tasks.

## 🚀 How to Execute the CLI Workflow

### 1. Starting Aider and Adding Context
Open a terminal in the root of the repository and launch Aider by adding the required contract and plan files into its chat context:
```bash
aider --model sonnet --editor-model o3-mini /add AGENTS.md plans/next-enhancements.md docs/prd/
```

### 2. Running the Architect and Auto-Commit Loops
To allow Aider to operate autonomously with deep reasoning in Plan Mode and verify its changes against test suites:
```bash
aider --architect --auto-commit --test "npm test"
```
* **Prompting Triggers (`inex`)**:
  * **Core**: `i` (Init/PRD bootstrap), `n`/`n3` (Next tasks execution), `e` (Enhance planning)
  * **Xtend (auto) (`{x}`)**: Auto quality gates (`t/f/c/r`) after build, plus manual triggers: `r` (Review & audit), `m` (Milestone roadmap), `t` (Test runner), `f` (Fix regression), `c` (Clean/refactor 256 LOC), `d` (Deploy/release)

* **Execution**: Aider will formulate an architectural plan, write code adhering to relative paths, folder nesting, and the 256 LOC rule, run the test script, self-correct if any failures occur, and automatically commit the final changes to git.


