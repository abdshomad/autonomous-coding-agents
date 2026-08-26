# Agent Instructions & Workflow Contract: The `inex` Method

> **Read-First Directive (`inex`)**: Always read `AGENTS.md`, `plans/focus.md`, `plans/next-enhancements.md`, `docs/prd/`, and relevant skills in `skills/`.
> **Path Constraint**: Use **relative paths only** across all documentation, plans, code references, and skill executions.

> [!CAUTION]
> ### 🛑 ZERO SUBMODULE MUTATION RULE (NON-NEGOTIABLE)
> **All Git Submodules (current and future, registered in `.gitmodules` or embedded in the workspace) are 100% READ-ONLY.**
> - **NEVER** use `write_to_file`, `replace_file_content`, or shell commands to create, modify, or delete files inside any git submodule.
> - **ALL** customizations, wrappers, Cordis overlay patches (`patches/<submodule-name>/`), runner scripts (`scripts/`), proxy middleware, and configs must reside exclusively in the **parent workspace root**.
> - If submodule behavior must change, use **parent overlay patches (`patches/<submodule-name>/`)**, **wrapper scripts (`scripts/`)**, or dynamic injection at runtime from the root. Submodule `git status` MUST always remain `clean`.

You must follow the **`inex` (Init, Next, Enhance, Extend `{x}`)** method, adopting the 6-stage senior engineering lifecycle:

---

## 1. The 6-Stage Engineering Lifecycle Mapping

| Stage | Trigger | Engineering Focus & Action Directive | Relevant Skill |
|:---|:---|:---|:---|
| **1. Define** | **`i` / `init`** | **Plan Mode & Deep Reasoning**: Ingest `docs/deep-research/` (or scan codebase / grill requirements), author `docs/prd/`, and scaffold baseline. | `skills/spec-driven-development/` |
| **2. Plan** | **`e` / `enhance`** | Ingest `plans/focus.md` directives, decomposing into **exactly 3 tasks per module** in `plans/next-enhancements.md` anchored in PRD. | `skills/task-decomposition/` |
| **3. Build** | **`n` / `next`** | **Autonomous Build**: If no active plan exists, auto-execute `e` first. Select top `{x}` impactful `[TODO]` tasks. Implement with relative paths and domain sub-folders. | `skills/test-driven-development/` |
| **4. Verify** | **`t` / `f`** | **Non-Negotiable Verification**: Run/create `tests/` (`t`), saving visual step screenshots to `screenshots/`. On failure, repair (`f`) or log in `issues/`. | `skills/debugging-and-recovery/` |
| **5. Review** | **`c` / `r`** | Refactor files nearing 256 LOC (`c`). Audit PRD compliance, security, and `[DECISION]` adherence (`r`). | `skills/code-audit-and-refactor/` |
| **6. Ship** | **`d` / `m`** | Execute milestone roadmaps in `plans/roadmaps/` (`m`). Configure Cloud vs Local routing and release changelogs (`d`). | `skills/milestone-and-release/` |

---

## 2. Autonomous Task Execution & `{x}` Quality Gate Chain (on `n` or `focus:`)
When `n`, `next`, `n{x}`, `focus: <direction>`, or `focus: reset` / `unfocus` is triggered:
1. **Plan Pre-Flight & Ephemeral Focus Check**:
   - If user typed `focus: reset` or `unfocus`: Set `plans/focus.md` to `[FOCUS]: none` and trigger `e` to restore standard PRD roadmap.
   - If user typed `focus: <direction>`: Set `plans/focus.md` to `[FOCUS]: <direction>` and auto-execute `e`.
   - **Ephemeral Focus Lifecycle**: When `plans/next-enhancements.md` is empty/completed, check `plans/focus.md`. If an active focus was just completed, reset `plans/focus.md` to `[FOCUS]: none` and automatically execute `e` (`skills/task-decomposition/`) to resume the main PRD roadmap.

2. **Task Selection**: Select the top `{x}` (default 1) most impactful `[TODO]` tasks and implement them fully in the codebase.
3. **Autonomous `{x}` Quality Gate Chain**:
   - **`t` (Verify)**: Run test suites and verify build integrity. Author test scripts in `tests/` and save visual step screenshots to `screenshots/{test-name}/{step#}-{short-step}.webp`.
   - **`f` (Self-Correct)**: If tests fail, perform root-cause analysis and execute targeted repairs until all suites pass. If blocked, log in `issues/00X-<short-title>.md`.
   - **`c` (Clean & Modularize)**: Check all modified/new files; if any file exceeds 256 LOC, refactor and split into modular sub-files.
   - **`r` (Audit & Review)**: Audit against PRD specifications, relative path constraints, and `[DECISION]` compliance.
4. **Document & Log**: Mark task as `[DONE]` in `plans/next-enhancements.md`. If the task introduces new capabilities, architectural contracts, or `[DECISION]` records, update `docs/features/<domain>/<topic>.md` (micro-bullets, ≤50 lines; skip for internal refactors/bug fixes). State completed tasks and next keystroke.


---

## 3. Anti-Rationalization & Red Flag Protocol
Agents frequently rationalize cutting corners. The following rationalizations are strictly forbidden:

| AI Excuse / Rationalization | Why It's Rejected | Mandatory Corrective Action |
|:---|:---|:---|
| *"I'll ignore plans/focus.md and follow my own plan."* | User focus directives are authoritative and override standard sequence. | Read and prioritize `[FOCUS]` items in `plans/focus.md`. |
| *"There are no tasks in plans/next-enhancements.md, so I cannot execute n."* | The inex contract mandates self-sufficient continuity. Inaction on empty plan breaks autonomy. | Automatically execute `e` (`skills/task-decomposition/`), generate 3 tasks per module from `docs/prd/`, and immediately implement the top `{x}` task(s). |
| *"The change is small, so testing is unnecessary."* | Verification is non-negotiable. Unverified code introduces silent regressions. | Always run test suites (`t`) and inspect output. |
| *"This file is 270 lines, but keeping it together is cleaner."* | File bloat degrades reasoning context and maintainability. | Strictly enforce 256 LOC limit (`c`); split into sub-files. |
| *"I'll use an absolute path for convenience."* | Absolute paths break cross-platform and containerized execution. | Convert to relative paths strictly. |
| *"I'll improve the design by altering an earlier user choice."* | `[DECISION]` tags are authoritative and immutable. | Preserve `[DECISION]` exactly; ask before deviating. |
| *"I'll skip PRD alignment since this is an internal refactor."* | Unanchored changes cause product drift. | Anchor every task in `docs/prd/` specifications. |
| *"I'll edit submodule files."* | Submodule immutability is absolute. | Never edit submodule files directly using file edit tools or shell commands. Save minimal file patches in parent `patches/<submodule-name>/` mirroring relative paths, write wrapper scripts in `scripts/`, and inject/apply dynamically at runtime. Submodule `git status` must remain 100% clean. |
| *"I'll put API keys in .env or commit secrets."* | Secret leakage compromises security. | Put general configs in `.env.{ver}`; store all keys/tokens strictly in gitignored `.secrets`. |

---

## 4. Core Governance Rules

- **Visual & Automated Testing**: Maintain test scripts in `tests/`. Save step-by-step visual verification evidence to gitignored `screenshots/{test-name}/{step#}-{short-step}.webp`.
- **Env & Secrets Segregation**: Differentiate environments: use `.env.local` for dev (localhost, mock data, debug) and `.env.production` for prod (cloud APIs, telemetry). Store credentials strictly in gitignored `.secrets` (dev) or inject via CI/CD runtime variables (prod). Provide `.env.example` and `.secrets.example`.
- **Blocking Issues**: Record unresolved blockers or external dependencies in numbered files (`issues/001-<short-title>.md`).
- **Submodule Immutability & Patching**: All Git submodules (current and future, registered in `.gitmodules` or embedded in the workspace) are strictly 100% read-only. NEVER use `write_to_file`, `replace_file_content`, or mutating shell commands inside any submodule directory. When behavior changes are required, generate minimal file patches stored in `patches/<submodule-name>/` mirroring relative paths (e.g., `patches/autonomous-coding-agents/path/to/file.patch`), create root runner scripts in `scripts/`, or use dynamic runtime injection. Submodule `git status` MUST always remain `clean`. See [docs/integrations/submodule.md](docs/integrations/submodule.md).
- **Relative Paths Only**: Strictly use relative paths across all plans, documentation, skills, and code.
- **Hierarchical Nesting**: Group code and documentation into domain sub-folders (e.g. `docs/features/core/architecture.md`, `services/auth/token.ts`) with short, role-focused file names.
- **Minimalist Feature Registry (`docs/features/`)**: Document only when adding new capabilities, contract shifts, or `[DECISION]` tags. Follow the 3–5 micro-bullet template (Capability, Key Files, Decision) capped at ≤50 lines per topic file. See [docs/features/README.md](docs/features/README.md).
- **256 LOC Limit**: Modularize and split any file exceeding 256 lines of code.
- **Demo / Live Mode**: Segregate mock data in `data/mockup/` with a mock API layer and an interactive UI toggle.
- **Cloud vs Local Switcher**: Support both remote cloud APIs and on-premise/self-hosted backends.

---

## 5. Cognitive Focus & High-Signal Output Contract (`i-have-adhd` Standard)

To eliminate cognitive fatigue and maintain laser focus, every agent response must strictly follow:
1. **Zero Fluff**: No conversational pleasantries, apologies, filler openings, or unsolicited recap essays.
2. **Ultra-Minimal 2-Liner Output**: Every execution turn (`n`, `i`, `e`, `{x}`) MUST conclude with this exact 2-line format:
   ```text
   [DONE] <Task ID/Action>: <Brief summary of built item>. Tests: <green test result>.
   👉 Next: Type 'n' (or 'focus: <direction>' to steer)
   ```
3. **Matter-of-Fact Errors**: Report build/test failures plainly with zero preamble; immediately trigger repair mode (`f`).
4. **Cap Lists at 5 Items**: Never output overwhelming walls of text; strictly cap lists and bullets to a maximum of 5 items.
5. **Batch Grilling Questions**: Present questions with indexed choices (`1a, 1b, 2a, 2b...`) with recommended option as `a`, enabling 1-line shorthand replies (`1a, 2a, 3b, 4c` or `all defaults`).
