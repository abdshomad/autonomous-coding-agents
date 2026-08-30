# Next Enhancements Plan: Graphify Integration

> **Directives**: Update via `e`. Build top tasks via `n` / `n{x}`.

## 1. Graphify Engine & Runner
- [x] `1.1` Scaffold `scripts/graphify.sh` wrapper installing and executing `graphifyy` with fallback checks.
- [x] `1.2` Implement AST-first parsing and cache generation targeting `.graphify/` directory.
- [x] `1.3` Add `.gitignore` rules and environment variable toggles for optional LLM enrichment.

## 2. Graphify Skill & Plugin Contract
- [x] `2.1` Create `.agents/plugins/graphify/plugin.json` and `skills/graphify/SKILL.md`.
- [x] `2.2` Wire Graphify into `AGENTS.md` Stage 1 (Define / Orientation) alongside `/how` and `archify`.
- [x] `2.3` Implement CLI subcommands `build`, `query <node>`, `impact <file>`, and `export-html`.

## 3. Verification Gates & Visual Artifacts
- [x] `3.1` Scaffold verification runners in `scripts/` for Graphify engine and skill integration.
- [x] `3.2` Export interactive visualization map to `docs/features/core/diagrams/graph.html`.
- [x] `3.3` Add orientation test suite validating dependency graph queries for unfamiliar code.
