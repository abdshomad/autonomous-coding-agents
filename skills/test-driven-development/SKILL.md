---
name: test-driven-development
description: Implement enhancement tasks using test-first discipline, relative paths, and modular directory structures.
stage: 3-build
trigger: n
---

# Test-Driven Development (Build Stage)

## 🎯 Purpose
Execute tasks from `plans/next-enhancements.md` with senior engineering rigor, ensuring clean code, domain folder nesting, and continuous test coverage.

## 📋 Step-by-Step Checklist
1. **Plan Pre-Flight Check**:
   - Inspect `plans/next-enhancements.md`.
   - If the file is missing, empty, or all tasks are marked `[DONE]`, **immediately execute `skills/task-decomposition/` (`e`)** to generate 3 new `[TODO]` tasks per module anchored in `docs/prd/`.
2. **Task Selection**: Select the most impactful `[TODO]` task from `plans/next-enhancements.md`.
3. **Write Failing Test**: Author tests representing the new capability before or alongside feature code.
4. **Implement Feature**:
   - Write clean, modular code placed in domain sub-folders (e.g. `services/auth/token.ts`).
   - Use **relative paths only**.
   - Keep files well below 256 lines of code.
5. **Trigger Autonomous `{x}` Quality Chain**: Automatically proceed to Verify (`t`/`f`), Review (`c`/`r`), and log features in `docs/features/<domain>/<topic>.md`.

## 🛑 Anti-Rationalization Table

| Excuse | Reality | Action |
|:---|:---|:---|
| *"There are no tasks in plans/next-enhancements.md, so I cannot run n."* | The inex contract mandates self-sufficient continuity. Inaction on empty plan breaks autonomy. | Automatically invoke `skills/task-decomposition/` (`e`), populate the plan, and execute task. |
| *"I'll write tests after I finish writing the entire codebase."* | Untested code introduces subtle regressions and bad architecture. | Write tests first or incrementally with each unit. |
| *"I'll put everything in one long file for now."* | Monolithic files violate the 256 LOC rule and degrade context. | Create domain sub-folders immediately. |
| *"I'll use an absolute path because it's faster."* | Hardcoded absolute paths break portability. | Always use relative paths. |


## ✅ Verification Gate
- [ ] Task fully implemented in codebase.
- [ ] Autonomous `{x}` quality chain passes all gates.
