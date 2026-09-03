# Agent Instructions & Workflow Contract: The `inex` Method

> **Directives**: Read `AGENTS.md`, `plans/focus.md`, `plans/next-enhancements.md`, `docs/prd/`, `skills/`. Root-relative paths only (no leading slashes, zero full/absolute paths). Extreme concision: sacrifice grammar for brevity across text, docs, comments.
> [!CAUTION]
> **Submodule Immutability**: Submodules 100% READ-ONLY. Zero mutations. Store diffs in `patches/<submodule-name>/`, runners in `scripts/`, dynamic runtime injection. Keep submodule `git status` clean.

---

## 1. 6-Stage Engineering Lifecycle & Minimal Skill Loading

| Stage | Trigger | Minimal Core Skill(s) | Lazy-Loaded Triggers (JIT) | Directive |
|:---|:---|:---|:---|:---|
| **1. Define** | `i` / `init` | `skills/spec-driven-development/`, `skills/how/`, `skills/grill-me/` | `skills/graphify/` (on AST query), `skills/archify/` (on diagram request), `skills/ai-memory/` (on memory recall) | Ingest `docs/deep-research/`, auto-invoke `/grill-me` clarification interview, query memory wiki, author PRD in `docs/prd/`; scaffold. |
| **2. Plan** | `e` / `enhance` | `skills/task-decomposition/` | `skills/unlazy/` (on recursive depth > 2) | Read `plans/focus.md`; decompose exact 3 tasks/module (≤150 LOC/task) in `plans/next-enhancements.md`; scaffold `GATES.md`. |
| **3. Build** | `n` / `next` | `skills/test-driven-development/`, `skills/ponytail/` | `skills/unlazy/` (on multi-part stall/recurse) | Auto-run `e` if plan empty. Select top `{x}` `[TODO]`. Implement with Ponytail ladder in domain sub-folders; update `GATES.md`. |
| **4. Verify** | `t` / `f` | *(None on clean `t`)*, `skills/debugging-and-recovery/` on `f` | `skills/gauntlet-loop/` (on `/gauntlet` or release), `skills/unlazy/` (on gate reverify) | Run `tests/` + `gate-check.mjs --reverify GATES.md`; visual proofs to `screenshots/{test}/{step}-{desc}.webp`. Fix (`f`). |
| **5. Review** | `c` / `r` | `skills/code-audit-and-refactor/`, `skills/cyclomatic-complexity/`, `skills/ponytail-review/`, `skills/ponytail-audit/`, `skills/caveman-review/`, `skills/unlazy/` | *(Full review bundle)* | Split files ≥256 LOC, refactor CC >10 (`c`). Audit PRD compliance, security, `[DECISION]`, gate lint (`gate-lint.mjs --strict`), diff review (`r`). |
| **6. Ship** | `d` / `m` | `skills/milestone-and-release/`, `skills/ponytail-debt/`, `skills/ponytail-gain/`, `skills/caveman-commit/`, `skills/caveman-stats/`, `skills/archify/`, `skills/unlazy/`, `skills/no-mistakes/`, `skills/ai-memory/` | *(Full shipping bundle)* | Move `[DONE]` tasks to `docs/features/`, harvest debt (`issues/debt-ledger.md`), finalize memory wiki (`scripts/ai-memory.sh finalize`), verify release gates (`d`). |
---

## 2. Autonomous Task Execution (`n` / `focus:` / `m`)

1. **Focus Pre-Flight**: `focus: <dir>` -> set `plans/focus.md` + trigger `e`. `focus: reset`/`unfocus` -> set `[FOCUS]: none` + trigger `e`. If plan completed and active focus was set, reset `[FOCUS]: none` + auto-trigger `e`.
2. **Select & Scope**: Take top `{x}` (default 1) `[TODO]` tasks from `plans/next-enhancements.md`. Enforce **Function-Level Tasking**: 1 task = 1 feature subsystem, diff ≤150 LOC with runnable integration gate.
3. **JIT Skill Ingestion**: Ingest strictly the minimal skill(s) for the active stage; do not load inactive stage skills into context.
4. **Quality Gates**: `t` (verify tests/screenshots + `gate-check.mjs --reverify GATES.md`) -> `f` (auto-repair via `skills/debugging-and-recovery/` & `scripts/no-mistakes.sh fix`) -> `c` (≤256 LOC, CC ≤10) -> `r` (audit PRD/Ponytail/Caveman/gate-lint) -> `/gauntlet` (adversarial critic on milestones) -> `d` (`scripts/no-mistakes.sh proxy`).
5. **Log & Doc**: Mark `[DONE]` in `plans/next-enhancements.md`. If new capability/contract/`[DECISION]`, update `docs/features/<domain>/<topic>.md` (≤50 lines, micro-bullets, root-relative links only).
6. **Migrate (`m`)**: Move all `[DONE]` tasks from `plans/next-enhancements.md` to `docs/features/<domain>/<topic>.md`; sync debt to `issues/debt-ledger.md`; update `docs/features/README.md` index; prune moved tasks from `plans/next-enhancements.md`; auto-run `e` if empty. If 0 done tasks, report 0 moved and advise running `n`.

---

## 3. Governance & Anti-Rationalization Protocol

| Violation / AI Excuse | Mandatory Directive |
|:---|:---|
| Verbose prose / grammar fluff | Forbidden. Sacrifice grammar for extreme telegraphic concision. |
| Ignore `plans/focus.md` | Authoritative. Always prioritize `[FOCUS]` directives. |
| Empty plan -> halt execution | Auto-execute `e` (3 tasks/module from PRD), then immediately execute `n{x}`. |
| Unverified / missing gates | Mandatory `GATES.md` with runnable `CHECK:` / `EXPECT:` verified via `gate-check.mjs`. |
| Skip testing / "small change" | Verification mandatory. Run test suite (`t`) + save screenshots before marking done. |
| Over-engineering / unnecessary deps | Strictly forbidden. Apply Ponytail Decision Ladder (YAGNI -> stdlib -> native -> minimal code). |
| File >256 LOC / Function CC >10 | Hard limit (`c`). Modularize files (≤256 LOC) and refactor branching into helpers (CC ≤10). |
| Use absolute/full paths (e.g. `/...`, `file:///...`) | Strictly forbidden. Enforce root-relative paths (e.g. `docs/prd/prd.md`) across docs, plans, code, and chat responses. |
| Alter prior user choice | `[DECISION]` tags immutable. Ask user before deviating. |
| Edit submodule files | Never edit submodule directly. Save overlay in `patches/<submodule>/`, wrap in `scripts/`. Keep `git status` clean. |
| Secrets in `.env` / commit | Store secrets strictly in gitignored `.secrets`. Use `.env.{local,production}` for config. Provide `.example`s. |
| Unresolved blocker | Log in numbered file `issues/00X-<short-title>.md`. |
| Cloud / Mock drift | Segregate mock data in `data/mockup/` with UI toggle. Support cloud vs local switcher. |

---

## 4. Cognitive Output Contract (`i-have-adhd` / `caveman`)

1. **Extreme Concision (Caveman `full`)**: Drop filler/articles, enforce telegraphic brevity (~65% token drop); keep code/paths/commands verbatim.
2. **Zero Fluff**: No greetings, filler, apologies, unsolicited recaps.
3. **2-Liner Output**: Every execution turn (`n`, `i`, `e`, `{x}`) MUST end with:
   ```text
   [DONE] <Task ID/Action>: <Brief summary>. Tests: <green result>.
   👉 Next: Type 'n' (or 'focus: <direction>' to steer)
   ```
4. **Matter-of-Fact Errors**: Report build/test failures plainly with zero preamble; immediately trigger repair (`f`).
5. **Cap Lists at 5**: Output lists capped at 5 items maximum.
6. **Batch Grilling Questions**: Present questions with indexed choices (`1a, 1b...`) with recommended option as `a` for 1-line shorthand replies (`1a, 2a`).
7. **Root-Relative Paths**: Always use root-relative paths without leading slashes (e.g. `docs/prd/prd.md`, `plans/focus.md`). Never use full/absolute paths (`/...`, `file:///...`).
8. **Complexity Reporting**: On CC refactoring, output compact before/after table above the 2-liner.
