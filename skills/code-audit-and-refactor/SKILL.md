---
name: code-audit-and-refactor
description: Enforce 256 LOC modular refactoring, relative path integrity, security posture, and user decision adherence.
stage: 5-review
trigger: c / r
---

# Code Audit & Refactor (Review Stage)

## 🎯 Purpose
Maintain long-term repository health by refactoring bloated files, eliminating dead code, and auditing compliance against PRD and user decisions.

## 📋 Step-by-Step Checklist
1. **Line Count Audit (`c`)**:
   - Scan all modified and created files for line counts.
   - Any file exceeding 256 lines must be modularized and split into sub-files.
2. **Path & Import Audit**: Verify all imports, documentation links, and assets use relative paths.
3. **User Decision Audit (`r`)**:
   - Check `docs/features/` for `[DECISION]` records.
   - Verify that no architectural decisions were reversed or weakened.
4. **Security & Cleanliness**:
   - Check for hardcoded secrets, dangling debug logs, or dead code.
5. **Feature Logging**: Document the new or updated feature in `docs/features/<domain>/<topic>.md`.

## 🛑 Anti-Rationalization Table

| Excuse | Reality | Action |
|:---|:---|:---|
| *"260 lines is close enough to 256, no need to refactor."* | Slippery slopes lead to 500+ line monoliths. | Refactor and split immediately. |
| *"I'll document the feature later."* | Undocumented features are forgotten and break onboarding. | Document in `docs/features/` before marking done. |
| *"I can change an earlier user decision without asking."* | Reversing user choices breaks user trust and architectural contracts. | Never alter `[DECISION]` without confirmation. |


## ✅ Verification Gate
- [ ] No file exceeds 256 LOC.
- [ ] Feature documented in `docs/features/<domain>/<topic>.md`.
