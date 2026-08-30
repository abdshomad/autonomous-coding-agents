---
name: graphify
description: Codebase knowledge graph generator and AST dependency query engine.
---

# Graphify Skill: AST & Dependency Knowledge Graph

Transform codebase structure, documentation, and dependencies into an explicit queryable knowledge graph to navigate architectural dependencies with zero token waste.

---

## ⚡ Command Invocation (`/graphify <command>`)

- Usage:
  - `/graphify build`: Parse codebase AST and build `.graphify/graph.json`.
  - `/graphify query <symbol>`: Query symbol definitions, callers, and downstream dependencies.
  - `/graphify impact <path>`: Calculate blast radius and dependent modules for a given file.
  - `/graphify export`: Generate interactive visual HTML at `docs/features/core/diagrams/graph.html`.

---

## 📋 Standard Output Schema (≤ 50 LOC)

```markdown
### 🕸️ Knowledge Graph: <Symbol|Path>

1. **Symbol Type**: Function / Class / File / Contract
2. **Defined In**: `path/to/source.ext`
3. **Incoming Callers / Importers**:
   - `path/to/caller1.ext` (imports)
   - `path/to/caller2.ext` (invokes)
4. **Outgoing Dependencies**:
   - `path/to/dep1.ext`
5. **Blast Radius / Impact Score**: Low / Medium / High (<N> dependents)
```

---

## 🛡️ Guidelines

- Root-relative paths only across outputs and logs.
- AST-first deterministic parsing (instant, zero LLM token cost).
- Optional semantic enrichment enabled via `GRAPHIFY_SEMANTIC=1`.
