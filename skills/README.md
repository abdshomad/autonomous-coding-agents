# Agent Skills Library (`skills/`)

Modular engineering skills following the `inex` method.

| Stage | Skill Folder | Trigger | Directive |
|:---|:---|:---|:---|
| **1. Define** | [`spec-driven-development`](spec-driven-development/SKILL.md), [`how`](how/SKILL.md), [`archify`](archify/SKILL.md) | `i` / `init` / `/how` | Synthesize research (`docs/deep-research/`), map architecture (`/how`, `/archify`), generate PRD. |
| **2. Plan** | [`task-decomposition`](task-decomposition/SKILL.md) | `e` / `enhance` | Decompose PRD into 3 tasks/module in `plans/next-enhancements.md`. |
| **3. Build** | [`test-driven-development`](test-driven-development/SKILL.md), [`ponytail`](ponytail/SKILL.md) | `n` / `next` | Implement tasks via TDD, Ponytail decision ladder, domain sub-folders, relative paths. |
| **4. Verify** | [`debugging-and-recovery`](debugging-and-recovery/SKILL.md), [`gauntlet-loop`](gauntlet-loop/SKILL.md) | `t` / `f` / `/gauntlet` | Enforce test verification, auto-repair, and opt-in adversarial critic gates. |
| **5. Review** | [`code-audit-and-refactor`](code-audit-and-refactor/SKILL.md), [`cyclomatic-complexity`](cyclomatic-complexity/SKILL.md), [`ponytail-review`](ponytail-review/SKILL.md), [`ponytail-audit`](ponytail-audit/SKILL.md), [`caveman-review`](caveman-review/SKILL.md) | `c` / `r` | Split files ≥256 LOC, refactor CC >10, audit anti-overengineering, micro-review PRs (`caveman-review`). |
| **6. Ship** | [`milestone-and-release`](milestone-and-release/SKILL.md), [`ponytail-debt`](ponytail-debt/SKILL.md), [`ponytail-gain`](ponytail-gain/SKILL.md), [`caveman-commit`](caveman-commit/SKILL.md), [`caveman-stats`](caveman-stats/SKILL.md), [`archify`](archify/SKILL.md) | `d` / `m` | Migrate `[DONE]` tasks (`m`); sync `issues/debt-ledger.md`; export visual diagrams & release proofs (`d`). |
| **Auto** | [`loop-orchestrator`](loop-orchestrator/SKILL.md), [`ponytail-help`](ponytail-help/SKILL.md), [`caveman-help`](caveman-help/SKILL.md) | `/loop` | Automate periodic execution of `n`; quick command references. |

---

## 🛠️ Directives
1. **Verification**: Terminal output & tests mandatory.
2. **Anti-Rationalization**: Follow `SKILL.md` rule tables strictly.
3. **Root-Relative Paths**: Strictly root-relative paths (e.g. `docs/prd/`, `skills/`) in code, docs, imports. Zero full/absolute paths.
