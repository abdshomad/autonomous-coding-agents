# Agent Skills Library (`skills/`)

Modular engineering skills following the `inex` method.

| Stage | Skill Folder | Trigger | Directive |
|:---|:---|:---|:---|
| **1. Define** | [`spec-driven-development`](spec-driven-development/SKILL.md) | `i` / `init` | Synthesize research from `docs/deep-research/` into PRD (`docs/prd/`). |
| **2. Plan** | [`task-decomposition`](task-decomposition/SKILL.md) | `e` / `enhance` | Decompose PRD into 3 tasks/module in `plans/next-enhancements.md`. |
| **3. Build** | [`test-driven-development`](test-driven-development/SKILL.md) | `n` / `next` | Implement tasks via TDD, domain sub-folders, relative paths. |
| **4. Verify** | [`debugging-and-recovery`](debugging-and-recovery/SKILL.md) | `t` / `f` | Enforce test verification & root-cause repair. |
| **5. Review** | [`code-audit-and-refactor`](code-audit-and-refactor/SKILL.md) | `c` / `r` | Split files ≥256 LOC, audit security & `[DECISION]` rules. |
| **6. Ship** | [`milestone-and-release`](milestone-and-release/SKILL.md) | `d` / `m` | Migrate `[DONE]` tasks to `docs/features/` (`m`); cloud/local deploys (`d`). |
| **Auto** | [`loop-orchestrator`](loop-orchestrator/SKILL.md) | `/loop` | Automate periodic execution of `n` via interval/cron. |

---

## 🛠️ Directives
1. **Verification**: Terminal output & tests mandatory.
2. **Anti-Rationalization**: Follow `SKILL.md` rule tables strictly.
3. **Relative Paths**: Strictly relative paths in code, docs, imports.
