---
name: debugging-and-recovery
description: Execute test suites, root-cause triage, and automated bug repair.
stage: 4-verify
trigger: t / f
---

# Debugging & Recovery (`t` / `f`)

## Directives
1. **Verify (`t`)**: Run `tests/` suites. Save UI screenshots to `screenshots/{test}/{step}-{desc}.webp`.
2. **Triage (`f`)**: On test failure, trace stack traces; formulate exact hypothesis.
3. **Repair**: Apply targeted fix without altering `[DECISION]` rules; re-run tests until green.
4. **Blockers**: If blocked by external dependencies, record in `issues/00X-<topic>.md`. Mark `[RESOLVED]` once fixed.

| Violation | Mandatory Action |
|:---|:---|
| Ignore test failures | Fix every test regression immediately. |
| Delete/comment out tests | Fix underlying application logic. |
| Assume green without running | Run test suite and inspect terminal output. |

## Verification
- [ ] Test command passes with 0 errors/failures.
