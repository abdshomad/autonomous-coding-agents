# Next Enhancements Plan: Full Submodules Architecture Expansion

> **Directives**: Update via `e`. Build top tasks via `n` / `n{x}`.

## 1. Submodule Provisioning & Overlay Scaffolding
- [x] `1.1` Clone and track all remaining 7 git submodules (`archify`, `caveman`, `gauntlet-loop`, `graphify`, `how`, `ponytail`, `unlazy`).
- [x] `1.2` Scaffold `patches/<name>/` overlay directories with immutability READMEs for all 9 submodules.
- [x] `1.3` Verify `.gitmodules` registration and repository URL parity across all submodules.

## 2. Submodule Sync & Management Runner
- [x] `2.1` Implement `scripts/submodules-sync.sh` CLI wrapper supporting `init`, `sync`, `check`, and `status`.
- [x] `2.2` Update `docs/integrations/submodule.md` with complete 9-submodule catalog and sync procedures.
- [x] `2.3` Wire submodule health check into `AGENTS.md` pre-flight instructions.

## 3. Verification Gates & Health Assurance
- [x] `3.1` Implement unified health oracle in `scripts/verify-all-submodules.mjs`.
- [x] `3.2` Update `GATES.md` with runnable submodule acceptance gates.
- [x] `3.3` Reverifying all gates via `gate-check.mjs --reverify GATES.md` and verify with `gate-lint.mjs`.
