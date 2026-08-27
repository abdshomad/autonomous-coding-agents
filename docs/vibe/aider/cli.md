# Aider CLI Quick Reference

Git-integrated autonomous command-line pair programmer.

## 🚀 Execution Commands

### 1. Launch with Context
```bash
aider --model sonnet --editor-model o3-mini /add AGENTS.md plans/next-enhancements.md docs/prd/
```

### 2. Autonomous Architect & Auto-Commit Loop
```bash
aider --architect --auto-commit --test "npm test"
```

### 3. Triggers
* `i` (Init/PRD), `n`/`n3` (Build tasks), `e` (Enhance planning)
* Quality gates `{x}`: `t` (test), `f` (fix), `c` (clean ≤256 LOC), `r` (review), `m` (migrate), `d` (deploy).
* Auto-commits green passes; self-corrects on test failure.


