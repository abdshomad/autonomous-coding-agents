# Grill-Me Socratic Interview Engine

- **Capability**: Automated requirements stress-testing and design-tree clarification interview before PRD drafting.
- **Key Files**:
  - `submodules/grill-me`
  - `.agents/plugins/grill-me/plugin.json`
  - `.agents/plugins/grill-me/skills/grill-me/SKILL.md`
  - `skills/grill-me/SKILL.md`
  - `patches/grill-me/README.md`
  - `scripts/submodules-sync.sh`
  - `scripts/verify-all-submodules.mjs`
- **Contract / Decision**:
  - `[DECISION]` Stage 1 (`i`) automatically invokes `/grill-me` interview before writing PRDs.
  - `[DECISION]` Upstream `mattpocock/skills` tracked as 100% read-only submodule `submodules/grill-me`.
  - `[DECISION]` Interactive modal (`ask_question`) is primary; Caveman batch indexing (`1a, 2a`) supported for rapid responses.
