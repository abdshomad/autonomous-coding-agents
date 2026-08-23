# Vibe Coding with VS Code IDE

VS Code supports a wide variety of AI extensions (e.g., GitHub Copilot, Cline, Roo Code) that integrate AI chat and code edits directly into your local editor workspace.

## 🚀 How to Run the Workflows

### 1. VS Code Copilot Chat
Use the `@workspace` agent inside the Copilot Chat panel to query and edit the codebase:
1. Open the Copilot Chat pane using `Cmd + Shift + I` (macOS) or `Ctrl + Alt + I` (Windows/Linux).
2. Reference the guidelines file by typing `#AGENTS.md` and selecting the file.
3. Prompt the chat agent with lifecycle triggers:
   * **Bootstrap**: `@workspace Switch to Plan Mode with Claude 3.7 Sonnet / o3-mini: ingest docs/deep-research/, author docs/prd/, and bootstrap repository per #AGENTS.md ('i')`
   * **Enhancement Planning**: `@workspace Read #AGENTS.md and plan enhancements in plans/next-enhancements.md ('e')`
   * **Task Execution**: `@workspace Read #AGENTS.md and execute next enhancement ('n')`
   * **Milestone / Migration**: `@workspace Read #AGENTS.md and execute roadmap milestone ('m')`

4. Copilot Chat will analyze the files, prepare a plan, and offer clickable commands to automatically create files, insert code, and run terminals.

### 2. Inline Code Edits
Make quick updates directly inside the editor:
1. Highlight the block of code you want to edit.
2. Press `Cmd + I` (macOS) or `Ctrl + I` (Windows/Linux) to open the inline chat.
3. Enter your prompt (e.g., `"refactor this module into sub-folders according to the 256 LOC rule in AGENTS.md"`).
4. Review the inline diff and accept the changes.
