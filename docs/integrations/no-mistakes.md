# no-mistakes Integration Guide

Pre-PR quality gate and disposable worktree verification runner embedding `kunchenguid/no-mistakes`.

---

## 1. Overview
`no-mistakes` routes code changes through an isolated pre-PR validation pipeline (`review` → `test` → `docs` → `lint` → `gate` → `push`) before code reaches the remote repository.

---

## 2. Configuration (`.no-mistakes.yaml`)
```yaml
agents:
  - antigravity
  - claude
  - cursor
  - opencode

commands:
  lint: "node scripts/verify-no-absolute-paths.mjs"
  gate: "node skills/unlazy/scripts/gate-lint.mjs GATES.md"
  test: "node skills/unlazy/scripts/gate-check.mjs --reverify GATES.md"

auto_fix:
  review: 0
  lint: 1
  format: 1

push_target: origin
```

---

## 3. Command Usage & Lifecycle Wiring

```bash
# Initialize configuration and submodule check
scripts/no-mistakes.sh init

# Run pre-PR validation pipeline
scripts/no-mistakes.sh run --intent "Feature implementation"

# Execute pre-push proxy gate
scripts/no-mistakes.sh proxy main

# Apply mechanical auto-fixes (format/lint)
scripts/no-mistakes.sh fix

# Escalate unresolved logic/complexity finding
scripts/no-mistakes.sh escalate "Complexity limit exceeded on auth module"
```

---

## 4. Submodule Immutability Rules
* `submodules/no-mistakes/` is 100% read-only.
* Modifications and overrides are stored in `patches/no-mistakes/`.
* Execution is driven via `scripts/no-mistakes.sh` and `skills/no-mistakes/SKILL.md`.
