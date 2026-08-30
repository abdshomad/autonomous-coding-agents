# Graphify Knowledge Graph Engine

- **Capability**: AST dependency & symbol knowledge graph generator enabling token-efficient codebase orientation.
- **Key Files**:
  - `scripts/graphify.sh`
  - `scripts/lib/ast-graph.mjs`
  - `skills/graphify/SKILL.md`
  - `.agents/plugins/graphify/plugin.json`
  - `docs/features/core/diagrams/graph.html`
- **Contract / Decision**:
  - `[DECISION]` Graphify is integrated into Stage 1 (Define / Orientation) in `AGENTS.md`.
  - `[DECISION]` AST-first deterministic parsing is default (zero LLM token cost); optional semantic enrichment via `GRAPHIFY_SEMANTIC=1`.
  - `[DECISION]` Cache resides in gitignored `.graphify/`, interactive visual map in `docs/features/core/diagrams/graph.html`.
