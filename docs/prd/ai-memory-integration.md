# PRD: ai-memory Persistent Memory Integration

> **Directive**: Synthesize from `docs/deep-research/ai-memory-integration.md` via `i`/`init`.

---

## 1. Overview
Integrate `akitaonrails/ai-memory` to provide persistent long-term memory, cross-agent handoffs, and architectural decision tracking across the 6-stage inex lifecycle.

---

## 2. Requirements

### `[P0]` Engine, Submodule & Runner
- Track upstream `https://github.com/akitaonrails/ai-memory.git` in `submodules/ai-memory/` (100% read-only).
- Scaffold `scripts/ai-memory.sh` wrapper supporting `init`, `query`, `remember`, `handoff`, `finalize`, `doctor`, and `status`.
- Provide `scripts/lib/ai-memory-engine.mjs` for markdown-based memory storage, FTS retrieval, and handoff serialization.
- Maintain patch storage in `patches/ai-memory/` adhering to submodule immutability.

### `[P0]` Marker Configuration & Storage
- Author root `.ai-memory.toml` marker declaring project scope, capture rules, and storage path (`.ai-memory/`).
- Support markdown wiki categories: `_rules/`, `decisions/`, `procedures/`, and `gotchas/`.

### `[P0]` Skill & Plugin Contract
- Create `.agents/plugins/ai-memory/plugin.json` and `skills/ai-memory/SKILL.md`.
- Wire `ai-memory` into `AGENTS.md` Stage 1 (`i`) for recall and Stage 6 (`d`/`m`) for session finalization.

### `[P1]` Cross-Session Handoff & Memory Consolidation
- Provide automated handoff generation capturing active goals, pending tasks, and recent architectural choices.
- Finalize session memory on `d` / `m` turns to consolidate transient working context into durable wiki pages.

### `[P2]` Verification Gates & Acceptance Ledger
- Author verification scripts in `scripts/verify-ai-memory-*.mjs`.
- Enforce runnable acceptance gates in `GATES.md`.
