# Product Requirements Document (PRD) Directory (`docs/prd/`)

This directory houses the authoritative Product Requirements Document (PRD) synthesizing research from `docs/deep-research/` into technical specifications, user personas, system workflows, and acceptance criteria.

---

## 🧠 Operational Mode & Reasoning Tier

> **Mandatory Plan Mode & Deep Reasoning**: Authoring and updating the PRD requires operating in **Plan Mode** using the **highest-tier smart model** with **deep thinking / extended reasoning** enabled to ensure complete architectural rigor.

---

## 📋 Structure Guidelines

1. **Simple Applications (< 256 LOC)**:
   - Authored in a single file: `docs/prd/prd.md`.
2. **Complex / Multi-Domain Applications (> 256 LOC)**:
   - Modularized into domain sub-folders (e.g., `docs/prd/overview.md`, `docs/prd/auth/specs.md`, `docs/prd/core/engine.md`, `docs/prd/ui/wireframes.md`).
   - Authored step-by-step using trigger `n` while remaining in Plan Mode.
3. **Downstream Execution**:
   - The PRD directly seeds `plans/next-enhancements.md` and `plans/roadmaps/`.
   - Feature implementations must strictly adhere to PRD specifications.

