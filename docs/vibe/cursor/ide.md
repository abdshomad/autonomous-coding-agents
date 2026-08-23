# Vibe Coding with Cursor IDE

Cursor IDE provides a highly interactive AI workspace. Rather than running a fully autonomous multi-file loop, the IDE variant focuses on interactive AI sidebar chats and inline code edits.

## 🚀 How to Use Interactive AI Features

### 1. Sidebar Workspace Chat
Use the AI Chat panel to ask the assistant to plan changes, write code snippets, or resolve bugs:
1. Open the Chat sidebar using `Cmd + L` (macOS) or `Ctrl + L` (Windows/Linux).
2. Reference the guidelines file by typing `@AGENTS.md` and select it from the dropdown.
3. Prompt the agent with triggers:
   * `"Review @AGENTS.md in Plan Mode with Claude 3.7 Sonnet (Thinking) / o3-mini: ingest docs/deep-research/, author docs/prd/, and bootstrap project structure ('i')"`
   * `"Review @AGENTS.md and draft next enhancement plan in plans/next-enhancements.md ('e')"`
   * `"Execute next enhancement task ('n') and document it in docs/features/"`
   * `"Execute next milestone phase ('m') in plans/roadmaps/template/"`

4. The assistant will write a plan and display code changes that you can apply with a single click.

### 2. Inline Code Edits
Modify code snippets directly inside your open files:
1. Highlight the code section you want to enhance or modify.
2. Press `Cmd + K` (macOS) or `Ctrl + K` (Windows/Linux) to open the inline prompt bar.
3. Type your instructions and press Enter. The AI will show a diff showing the edits, ensuring that files stay below 256 LOC.
