# Vibe Coding with Cursor Composer

Cursor Composer is Cursor's advanced agentic interface designed for multi-file code editing, execution of terminal command loops, and self-correction during building and testing.

## 🚀 How to Run the Agent

### 1. Enable Agentic Mode
1. Press `Cmd + I` (macOS) or `Ctrl + I` (Windows/Linux) to open the Cursor Composer dialog.
2. Toggle the interface mode to **Agent** (instead of Normal) to allow Composer to write code and execute terminal commands autonomously.

### 2. Context-Aware Prompting & Triggers
1. Reference the workflow file by typing `@AGENTS.md` to feed the agent instructions into its context window.
2. Instruct the agent with lifecycle triggers:
   * **Core Triggers**: `@AGENTS.md trigger init` (i), `trigger next` (n/n3), `trigger enhance` (e)
   * **Xtend (auto) Triggers (`{x}`)**:

     * `@AGENTS.md trigger review` (r)
     * `@AGENTS.md trigger milestone` (m)
     * `@AGENTS.md trigger test` (t)
     * `@AGENTS.md trigger fix` (f)
     * `@AGENTS.md trigger clean` (c)
     * `@AGENTS.md trigger deploy` (d)
3. The Agent will automatically read `AGENTS.md` and `plans/next-enhancements.md`, propose a plan, modify the required files (observing relative paths, folder nesting, and the 256 LOC limit), run test commands, and resolve errors autonomously until the task is complete.


### 3. Plan Mode & Reasoning Model Configuration
For Deep Research (`docs/deep-research/`) and PRD authoring (`docs/prd/`):
* Select the highest-tier reasoning model (e.g. `Claude 3.7 Sonnet (Thinking)`, `o3-mini (High)`, or `Gemini 2.5 Pro`).
* Engage Composer in **Plan Mode** to conduct research and draft PRD sections before switching to code implementation loops.


