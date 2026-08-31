# PRD: Full Git Submodules Architecture Expansion

> **Directive**: Synthesize from `docs/deep-research/submodules-expansion.md` via `i`/`init`.

---

## 1. Overview
Embrace Git submodules across all 9 external engineering skills (`ai-memory`, `archify`, `caveman`, `gauntlet-loop`, `graphify`, `how`, `no-mistakes`, `ponytail`, `unlazy`), enforcing a strict 100% read-only contract paired with immutable patch overlays.

---

## 2. Requirements

### `[P0]` Full Submodule Matrix & Git Tracking
- Pinned tracking of all 9 upstream repositories under `submodules/<name>/` via `.gitmodules`.
- Scaffold corresponding patch overlay directories `patches/<name>/` with immutability contracts.

### `[P0]` Centralized Submodule Sync & Health Runner
- Implement `scripts/submodules-sync.sh` supporting `init`, `sync`, `check`, `status`, and `help`.
- Validate that all submodules maintain clean `git status` with zero uncommitted or untracked changes.

### `[P0]` Comprehensive Verification Oracle
- Implement `scripts/verify-all-submodules.mjs` validating that all 9 submodules exist, are tracked in `.gitmodules`, have matching `plugin.json` repository URLs, and have valid `patches/` overlays.
- Wire into `GATES.md` and satisfy strict linting.

### `[P1]` Lifecycle & Documentation Alignment
- Update `docs/integrations/submodule.md` with complete 9-submodule catalog and sync instructions.
- Ensure all skill definitions maintain root-relative paths and submodule immutability.
