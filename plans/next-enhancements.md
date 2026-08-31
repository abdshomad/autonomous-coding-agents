# Next Enhancements Plan: no-mistakes Integration

> **Directives**: Update via `e`. Build top tasks via `n` / `n{x}`.

## 1. no-mistakes Engine, Submodule & Runner
- [x] `1.1` Configure `submodules/no-mistakes` tracking and scaffold `patches/no-mistakes/` overlay directory.
- [x] `1.2` Implement `scripts/no-mistakes.sh` CLI wrapper supporting `init`, `run`, `fix`, `proxy`, and fallback installer.
- [x] `1.3` Author root `.no-mistakes.yaml` pre-PR pipeline config with multi-agent cascade and gate hooks.

## 2. no-mistakes Skill, Plugin & Lifecycle Wiring
- [x] `2.1` Scaffold `.agents/plugins/no-mistakes/plugin.json` and `skills/no-mistakes/SKILL.md`.
- [x] `2.2` Wire `no-mistakes` into `AGENTS.md` Stage 4 (`f`), Stage 5 (`r`), and Stage 6 (`d`).
- [x] `2.3` Implement tiered debt escalation hook logging unresolved worktree issues to `issues/debt-ledger.md`.

## 3. Verification Gates & Release Alignment
- [x] `3.1` Scaffold verification test suite in `scripts/verify-no-mistakes-*.mjs`.
- [x] `3.2` Author integration documentation in `docs/integrations/no-mistakes.md`.
- [x] `3.3` Update `GATES.md` with runnable acceptance gates and verify with `gate-lint.mjs`.
