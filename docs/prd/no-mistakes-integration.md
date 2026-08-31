# PRD: no-mistakes Quality Gate Integration

> **Directive**: Synthesize from `docs/deep-research/no-mistakes-integration.md` via `i`/`init`.

---

## 1. Overview
Integrate `kunchenguid/no-mistakes` as the primary pre-PR gate, disposable worktree verification runner, and auto-repair proxy within the 6-stage inex lifecycle.

---

## 2. Requirements

### `[P0]` Engine, Submodule & Runner
- Track upstream `https://github.com/kunchenguid/no-mistakes.git` in `submodules/no-mistakes/` (100% read-only).
- Scaffold `scripts/no-mistakes.sh` CLI wrapper supporting `init`, `run`, `proxy`, `fix`, and fallback binary download.
- Maintain patch storage in `patches/no-mistakes/` with zero direct submodule modifications.

### `[P0]` Pipeline Configuration
- Author root `.no-mistakes.yaml` declaring sequential validation pipeline (`review` → `test` → `docs` → `lint` → `push`).
- Wire `gate-check.mjs --reverify GATES.md`, `tests/`, and `gate-lint.mjs` as pipeline verification steps.
- Configure multi-agent cascade (`antigravity` primary, `claude`, `cursor`, `opencode` fallbacks).

### `[P0]` Skill & Plugin Contract
- Create `.agents/plugins/no-mistakes/plugin.json` and `skills/no-mistakes/SKILL.md`.
- Wire `no-mistakes` into `AGENTS.md` Stage 4 (`f`), Stage 5 (`r`), and Stage 6 (`d`).

### `[P1]` Tiered Auto-Fix & Debt Escalation
- Auto-apply mechanical fixes (formatting, linter autofixes, reverification).
- Log unresolved architectural, LOC (>256), or CC (>10) failures into `issues/debt-ledger.md` and escalate to user.

### `[P2]` Verification Gates & CI Alignment
- Provide executable verification scripts in `scripts/verify-no-mistakes-*.mjs`.
- Enforce strict acceptance criteria in `GATES.md`.
