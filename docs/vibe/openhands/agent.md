# OpenHands Agent Quick Reference

Sandbox-based autonomous agent executing terminal and file loops.

## 🚀 Workflows

### 1. Setup & Launch
1. Open repo workspace in OpenHands container/UI.
2. Provide objective referencing `AGENTS.md`:
   * **Init**: `"Plan Mode with high reasoning: ingest docs/deep-research/, draft docs/prd/, initialize per AGENTS.md ('i')"`
   * **Plan**: `"Read AGENTS.md, generate next enhancement plan ('e')"`
   * **Build**: `"Read AGENTS.md, execute next enhancement tasks ('n3')"`
   * **Milestone**: `"Read AGENTS.md, execute roadmap milestone ('m')"`

### 2. Autonomous Loop
* OpenHands reads `AGENTS.md` and `plans/next-enhancements.md`.
* Writes modular code (≤256 LOC, domain folders).
* Runs terminal tests, repairs errors, logs features in `docs/features/`.
