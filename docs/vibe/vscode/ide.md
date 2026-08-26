# VS Code IDE Quick Reference

AI extension (Copilot / Cline / Roo Code) workflows.

## 🚀 Workflows

### 1. Copilot Chat (`Cmd/Ctrl + Shift + I`)
* Tag `#AGENTS.md`.
* Prompts:
  * **Init**: `@workspace Plan Mode: ingest docs/deep-research/, author docs/prd/, bootstrap per #AGENTS.md ('i')`
  * **Plan**: `@workspace Read #AGENTS.md, plan in plans/next-enhancements.md ('e')`
  * **Next**: `@workspace Read #AGENTS.md, execute next enhancement ('n')`
  * **Milestone**: `@workspace Read #AGENTS.md, execute milestone ('m')`

### 2. Inline Edits (`Cmd/Ctrl + I`)
* Highlight code -> Press `Cmd/Ctrl + I`.
* Prompt: `"Refactor into sub-folders adhering to 256 LOC limit in AGENTS.md"`.
* Accept diff.
