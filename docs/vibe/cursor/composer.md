# Cursor Composer Quick Reference

Agentic multi-file code editing, terminal loop, and auto-repair.

## 🚀 Execution

### 1. Launch Agent Mode
* Press `Cmd + I` (macOS) / `Ctrl + I` (Linux/Windows) -> Toggle mode to **Agent**.

### 2. Context & Triggers
* Reference context with `@AGENTS.md`.
* Prompts:
  * **Define**: `@AGENTS.md trigger init` (`i`)
  * **Plan**: `@AGENTS.md trigger enhance` (`e`)
  * **Build**: `@AGENTS.md trigger next` (`n` / `n3`)
  * **Xtend (`{x}`)**: `trigger review` (`r`), `trigger migrate` (`m`), `trigger test` (`t`), `trigger fix` (`f`), `trigger clean` (`c`), `trigger deploy` (`d`).

### 3. Reasoning & Plan Mode
* Use highest reasoning model (`Claude 3.7 Sonnet (Thinking)`, `o3-mini (High)`) in **Plan Mode** for research (`docs/deep-research/`) and PRD (`docs/prd/`).
* Composer implements code, enforces ≤256 LOC, executes tests, repairs regressions autonomously.


