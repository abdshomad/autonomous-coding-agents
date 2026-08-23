---
name: debugging-and-recovery
description: Execute non-negotiable verification test suites, perform root-cause triage, and auto-repair regressions.
stage: 4-verify
trigger: t / f
---

# Debugging & Error Recovery (Verify Stage)

## 🎯 Purpose
Provide evidence-based verification of workspace integrity and execute automated, targeted fixes for runtime or test failures.

## 📋 Step-by-Step Checklist
1. **Execute Test Suite (`t`)**: Run build and test scripts (e.g. `npm test`, `pytest`).
2. **Inspect Output & Logs**:
   - If tests pass: Capture green verification proof and proceed to Review stage.
   - If tests fail: Enter Fix mode (`f`).
3. **Root-Cause Analysis (`f`)**:
   - Trace stack traces and error messages back to the failure source.
   - Formulate a precise hypothesis without making shotgun edits.
4. **Targeted Repair**: Modify code to resolve the regression without altering valid specifications or `[DECISION]` tags.

5. **Re-Verify**: Re-run test suites until zero failures remain.

## 🛑 Anti-Rationalization Table

| Excuse | Reality | Action |
|:---|:---|:---|
| *"The test failure is just a minor edge case, I'll ignore it."* | Ignored test failures compound into critical platform bugs. | Stop and fix every test failure. |
| *"I'll comment out the failing test to make it pass."* | Removing tests destroys safety nets. | Fix the root cause in application logic. |
| *"I'll assume tests pass without running them."* | Verification is non-negotiable. | Always run test commands and check output. |

## ✅ Verification Gate
- [ ] Test command outputs green with 0 errors/failures.
