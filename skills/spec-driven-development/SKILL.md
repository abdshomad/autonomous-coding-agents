---
name: spec-driven-development
description: Synthesize deep research into authoritative, modular Product Requirements Documents (PRDs) before writing code.
stage: 1-define
trigger: i
---

# Spec-Driven Development (Define Stage)

## 🎯 Purpose
Turn ideas and technical research from `docs/deep-research/` into a concrete, unambiguous Product Requirements Document (PRD) in `docs/prd/` before initiating project scaffolding or implementation.

## 📋 Step-by-Step Checklist
1. **Switch AI Mode**: Switch to **Plan Mode** with the **highest-tier smart reasoning model** enabled.
2. **Ingest Deep Research**: Inspect `docs/deep-research/` for user-provided or agent-generated feasibility benchmarks.
3. **Determine PRD Modularity**:
   - If estimated PRD < 256 lines: create a single `docs/prd/prd.md`.
   - If complex / multi-domain: scaffold `docs/prd/<domain>/<topic>.md` with clear domain boundaries.
4. **Author PRD Specifications**: Define executive summary, user personas, architecture contracts, and acceptance criteria.
5. **Seed Next Enhancements**: Derive initial active tasks directly into `plans/next-enhancements.md`.

## 🛑 Anti-Rationalization Table

| Excuse | Reality | Action |
|:---|:---|:---|
| *"I already know what to build, skipping the PRD."* | Unwritten assumptions cause major rewrites. | Write and verify `docs/prd/` first. |
| *"The PRD is too detailed for a quick prototype."* | Prototypes without specs become unmaintainable debt. | Write at least a concise, structured `docs/prd/prd.md`. |
| *"I'll use fast model mode for the PRD."* | Shallow reasoning leads to architectural blind spots. | Always use Plan Mode with deep reasoning. |

## ✅ Verification Gate
- [ ] `docs/prd/` created and populated.
- [ ] Active tasks in `plans/next-enhancements.md` are directly derived from PRD specs.
