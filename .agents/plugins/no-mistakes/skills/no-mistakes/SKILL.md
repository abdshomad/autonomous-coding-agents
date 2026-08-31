---
name: no-mistakes
description: Pre-PR quality gate, disposable worktree verification runner, and auto-repair proxy.
stage: 6-ship
trigger: d / /no-mistakes / git push no-mistakes
---

# no-mistakes Skill: Pre-PR Quality Gate & Auto-Repair Proxy

`no-mistakes` enforces an automated verification pipeline (`review` → `test` → `docs` → `lint` → `gate` → `push`) in an isolated disposable worktree before changes reach the remote repository.

---

## ⚡ Command Invocation (`/no-mistakes` or CLI)

- Usage:
  - `/no-mistakes`: Validate committed branch through pre-PR quality pipeline.
  - `/no-mistakes <task>`: Implement task, commit to feature branch, and validate through pipeline.
  - `scripts/no-mistakes.sh run --intent "<goal>"`: Execute full validation chain.
  - `scripts/no-mistakes.sh proxy [branch]`: Intercept `git push` with pre-PR gate verification.
  - `scripts/no-mistakes.sh fix`: Auto-apply mechanical fixes (formatting, linting).
  - `scripts/no-mistakes.sh escalate "<issue>"`: Log unresolved logic/complexity failure to `issues/debt-ledger.md`.

---

## 🛡️ Findings & Decision Policy

| Finding Action | Severity | Action Taken |
|:---|:---|:---|
| `auto-fix` | Low / Warning | Apply mechanical fix automatically (`scripts/no-mistakes.sh fix`). |
| `no-op` | Info | Informational; accept step and proceed. |
| `ask-user` | High / Error | Stop; escalate to user or log to `issues/debt-ledger.md`. Do not bypass. |

---

## 📋 Lifecycle Integration

- **Stage 4 (Verify: `t`/`f`)**: Disposable worktree execution prevents working tree pollution. Auto-repair (`f`) addresses mechanical lint/test failures.
- **Stage 5 (Review: `c`/`r`)**: Pipeline review checks file LOC (≤256) and cyclomatic complexity (CC ≤10).
- **Stage 6 (Ship: `d`/`m`)**: Pre-push proxy gate (`git push no-mistakes`) ensures only green changes open PRs.
