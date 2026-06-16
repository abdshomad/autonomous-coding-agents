# Vibe Coding with Cursor Composer

Cursor Composer is Cursor's advanced agentic interface designed for multi-file code editing, execution of terminal command loops, and self-correction during building and testing.

## 🚀 How to Run the Agent

### 1. Enable Agentic Mode
1. Press `Cmd + I` (macOS) or `Ctrl + I` (Windows/Linux) to open the Cursor Composer dialog.
2. Toggle the interface mode to **Agent** (instead of Normal) to allow Composer to write code and execute terminal commands autonomously.

### 2. Context-Aware Prompting
1. Reference the workflow file by typing `@AGENTS.md` to feed the agent instructions into its context window.
2. Instruct the agent to run the next task:
   ```text
   @AGENTS.md trigger next
   ```
3. The Agent will automatically read `AGENTS.md` and `plans/next-enhancements.md`, propose a plan, modify the required files, run test commands, and resolve errors autonomously until the task is complete.
