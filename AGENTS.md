# Agent Instructions & Workflow Contract: The `inex` Method

> **Directives**: Read `AGENTS.md`, `plans/focus.md`, `plans/next-enhancements.md`, `docs/prd/`, `skills/`. Relative paths only. Extreme concision: sacrifice grammar for brevity across text, docs, comments.
> [!CAUTION]
> **Submodule Immutability**: Submodules 100% READ-ONLY. Zero mutations. Store diffs in `patches/<submodule-name>/`, runners in `scripts/`, dynamic runtime injection. Keep submodule `git status` clean.

---

## 1. 6-Stage Engineering Lifecycle Mapping

| Stage | Trigger | Directive | Skill |
|:---|:---|:---|:---|
| **1. Define** | `i` / `init` | Ingest `docs/deep-research/` or grill; write `docs/prd/`; scaffold baseline. | `skills/spec-driven-development/` |
| **2. Plan** | `e` / `enhance` | Read `plans/focus.md`; decompose exact 3 tasks/module in `plans/next-enhancements.md` from PRD. | `skills/task-decomposition/` |
| **3. Build** | `n` / `next` | Auto-run `e` if plan empty. Select top `{x}` `[TODO]`. Implement in domain sub-folders. | `skills/test-driven-development/` |
| **4. Verify** | `t` / `f` | Run `tests/`; save visual proofs to `screenshots/{test}/{step}-{desc}.webp`. Fix (`f`) or log `issues/`. | `skills/debugging-and-recovery/` |
| **5. Review** | `c` / `r` | Split files ≥256 LOC (`c`). Audit PRD compliance, security, `[DECISION]` adherence (`r`). | `skills/code-audit-and-refactor/` |
| **6. Ship** | `d` / `m` | Move `[DONE]` tasks to `docs/features/` & prune plan (`m`). Configure cloud/local routing, release changelog (`d`). | `skills/milestone-and-release/` |
---

## 2. Autonomous Task Execution (`n` / `focus:` / `m`)

1. **Focus Pre-Flight**: `focus: <dir>` -> set `plans/focus.md` + trigger `e`. `focus: reset`/`unfocus` -> set `[FOCUS]: none` + trigger `e`. If plan completed and active focus was set, reset `[FOCUS]: none` + auto-trigger `e`.
2. **Select**: Take top `{x}` (default 1) `[TODO]` tasks from `plans/next-enhancements.md`.
3. **Quality Gates**: `t` (verify tests/screenshots) -> `f` (auto-repair failures) -> `c` (enforce ≤256 LOC) -> `r` (audit PRD/relative paths/decisions).
4. **Log & Doc**: Mark `[DONE]` in `plans/next-enhancements.md`. If new capability/contract/`[DECISION]`, update `docs/features/<domain>/<topic>.md` (≤50 lines, micro-bullets).
5. **Migrate (`m`)**: Move all `[DONE]` tasks from `plans/next-enhancements.md` to `docs/features/<domain>/<topic>.md`; update `docs/features/README.md` index; prune moved tasks from `plans/next-enhancements.md`; auto-run `e` if empty. If 0 done tasks, report 0 moved and advise running `n`.

---

## 3. Governance & Anti-Rationalization Protocol

| Violation / AI Excuse | Mandatory Directive |
|:---|:---|
| Verbose prose / grammar fluff | Forbidden. Sacrifice grammar for extreme telegraphic concision. |
| Ignore `plans/focus.md` | Authoritative. Always prioritize `[FOCUS]` directives. |
| Empty plan -> halt execution | Auto-execute `e` (3 tasks/module from PRD), then immediately execute `n{x}`. |
| Skip testing / "small change" | Verification mandatory. Run test suite (`t`) + save screenshots before marking done. |
| File exceeds 256 LOC | Hard limit (`c`). Modularize and split into domain sub-files. |
| Use absolute paths | Relative paths strictly enforced across code, docs, plans, skills. |
| Alter prior user choice | `[DECISION]` tags immutable. Ask user before deviating. |
| Edit submodule files | Never edit submodule directly. Save overlay in `patches/<submodule>/`, wrap in `scripts/`. Keep `git status` clean. |
| Secrets in `.env` / commit | Store secrets strictly in gitignored `.secrets`. Use `.env.{local,production}` for config. Provide `.example`s. |
| Unresolved blocker | Log in numbered file `issues/00X-<short-title>.md`. |
| Cloud / Mock drift | Segregate mock data in `data/mockup/` with UI toggle. Support cloud vs local switcher. |

---

## 4. Cognitive Output Contract (`i-have-adhd`)

1. **Extreme Concision**: Sacrifice grammar, drop filler/articles; maximize token density across responses, docs, plans, issue logs, code comments.
2. **Zero Fluff**: No greetings, filler, apologies, unsolicited recaps.
3. **2-Liner Output**: Every execution turn (`n`, `i`, `e`, `{x}`) MUST end with:
   ```text
   [DONE] <Task ID/Action>: <Brief summary>. Tests: <green result>.
   👉 Next: Type 'n' (or 'focus: <direction>' to steer)
   ```
4. **Matter-of-Fact Errors**: Report build/test failures plainly with zero preamble; immediately trigger repair (`f`).
5. **Cap Lists at 5**: Output lists capped at 5 items maximum.
6. **Batch Grilling Questions**: Present questions with indexed choices (`1a, 1b...`) with recommended option as `a` for 1-line shorthand replies (`1a, 2a`).
