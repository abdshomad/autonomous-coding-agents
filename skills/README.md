# Agent Skills Library (`skills/`)

Modular engineering skills following the `inex` method.

| Stage | Minimal Core Skill(s) | Lazy-Loaded Triggers (JIT) | Stage Directives |
|:---|:---|:---|:---|
| **1. Define** | [`spec-driven-development`](spec-driven-development/SKILL.md), [`how`](how/SKILL.md) | [`graphify`](graphify/SKILL.md) (AST query), [`archify`](archify/SKILL.md) (diagrams) | Research ingestion, codebase orientation, author PRD. |
| **2. Plan** | [`task-decomposition`](task-decomposition/SKILL.md) | [`unlazy`](unlazy/SKILL.md) (recursion depth > 2) | Decompose PRD into 3 tasks/module (≤150 LOC/task); scaffold `GATES.md`. |
| **3. Build** | [`test-driven-development`](test-driven-development/SKILL.md), [`ponytail`](ponytail/SKILL.md) | [`unlazy`](unlazy/SKILL.md) (stalls/complex multi-part) | Implement via TDD, Ponytail ladder, domain sub-folders, Depth Tree gates. |
| **4. Verify** | *(None on clean `t`)*, [`debugging-and-recovery`](debugging-and-recovery/SKILL.md) (on `f`) | [`gauntlet-loop`](gauntlet-loop/SKILL.md) (`/gauntlet` / release) | Enforce test verification, auto-repair, runnable acceptance gates (`gate-check.mjs`). |
| **5. Review** | [`code-audit-and-refactor`](code-audit-and-refactor/SKILL.md), [`cyclomatic-complexity`](cyclomatic-complexity/SKILL.md), [`ponytail-review`](ponytail-review/SKILL.md), [`ponytail-audit`](ponytail-audit/SKILL.md), [`caveman-review`](caveman-review/SKILL.md), [`unlazy`](unlazy/SKILL.md) | *(Full review bundle)* | Split files ≥256 LOC, refactor CC >10, audit anti-overengineering, gate lint. |
| **6. Ship** | [`milestone-and-release`](milestone-and-release/SKILL.md), [`ponytail-debt`](ponytail-debt/SKILL.md), [`ponytail-gain`](ponytail-gain/SKILL.md), [`caveman-commit`](caveman-commit/SKILL.md), [`caveman-stats`](caveman-stats/SKILL.md), [`archify`](archify/SKILL.md), [`unlazy`](unlazy/SKILL.md), [`no-mistakes`](no-mistakes/SKILL.md) | *(Full shipping bundle)* | Migrate `[DONE]` tasks (`m`); sync `issues/debt-ledger.md`; export visual diagrams & release proofs (`d`). |
| **Auto** | [`loop-orchestrator`](loop-orchestrator/SKILL.md), [`ponytail-help`](ponytail-help/SKILL.md), [`caveman-help`](caveman-help/SKILL.md) | *(On demand)* | Automate periodic execution of `n`; quick command references. |

---

## 🛠️ Directives
1. **Verification**: Terminal output & tests mandatory.
2. **Anti-Rationalization**: Follow `SKILL.md` rule tables strictly.
3. **Root-Relative Paths**: Strictly root-relative paths (e.g. `docs/prd/`, `skills/`) in code, docs, imports. Zero full/absolute paths.
