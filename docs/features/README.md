# Feature Documentation (`docs/features/`)

Minimal registry of capabilities and `[DECISION]` records.

## Rules
- **Trigger**: Document only on new user capability, contract change, or `[DECISION]`. Skip refactors/fixes.
- **Location**: `docs/features/<domain>/<topic>.md` (relative paths).
- **Limit**: ≤50 LOC per topic.
- **Ad-Hoc Features**: When implementing unprompted/unplanned features, document immediately in `docs/features/<domain>/<topic>.md` and register in Index upon completion. Keep `plans/next-enhancements.md` untouched.

## Template
```markdown
# <Topic>
- **Capability**: <1-line summary>.
- **Key Files**: [`path/to/file.ts`](../../path/to/file.ts)
- **Contract / Decision**: `[DECISION]` <immutable rule/contract>.
```

## Index
* [core/architecture.md](core/architecture.md): Core platform architecture and contracts.
* [core/graphify.md](core/graphify.md): Graphify AST knowledge graph and orientation engine.
* [submodules/grill-me.md](submodules/grill-me.md): Socratic interview engine and Stage 1 requirements clarification.
