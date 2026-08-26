# Feature Documentation (`docs/features/`)

Minimal registry of capabilities and `[DECISION]` records.

## Rules
- **Trigger**: Document only on new user capability, contract change, or `[DECISION]`. Skip refactors/fixes.
- **Location**: `docs/features/<domain>/<topic>.md` (relative paths).
- **Limit**: ≤50 LOC per topic.

## Template
```markdown
# <Topic>
- **Capability**: <1-line summary>.
- **Key Files**: [`path/to/file.ts`](../../path/to/file.ts)
- **Contract / Decision**: `[DECISION]` <immutable rule/contract>.
```

## Index
* [core/architecture.md](core/architecture.md): Core platform architecture and contracts.
