---
name: grill-me
description: Relentless Socratic interview to sharpen plans, design decisions, and clarify requirements before PRD generation.
stage: 1-define
trigger: i
---

# Grill-Me Skill: Socratic Requirements Alignment (`i`)

Relentless interview engine based on `submodules/grill-me` (Matt Pocock skills) adapted for automated Stage 1 (`Define`) lifecycle.

---

## ⚡ Lifecycle Trigger & Automation

- **Auto-Invocation**: When user enters `i` / `init`, invoke `grill-me` protocol immediately before writing `docs/prd/prd.md`.
- **Manual Command**: `/grill-me <topic>` triggers standalone design stress-testing.

---

## 🧭 Design Tree & Frontier Protocol

1. **Map Design Tree**: Structure task decisions hierarchically. Dependent decisions wait on prerequisites.
2. **Compute Frontier**: Identify all open decisions whose dependencies are satisfied.
3. **Fact vs Decision**:
   - Facts: Inspect codebase via read/search tools autonomously. Never grill user on readable facts.
   - Decisions: Present choices to user and halt assumptions until clarified.

---

## 📋 Interaction Modes

### Mode A: Interactive Modal (`ask_question` tool)
- Formulate question body clearly.
- Provide options formatted as user replies.
- Mark top choice as `(Recommended)` in first position.

### Mode B: Batch Shorthand (Caveman Contract)
- Number questions sequentially (`Q1`, `Q2`...).
- Index options (`1a, 1b...`) with recommended choice as `a`.
- Allow user rapid 1-line shorthand replies (`1a, 2a`).

---

## 💾 Output Artifacts

1. **Clarification Log**: Append settled answers to `docs/deep-research/requirements-interview.md`.
2. **PRD Handoff**: Synthesize verified constraints directly into `docs/prd/prd.md`.
3. **Plan Seeding**: Populate `plans/next-enhancements.md` with aligned tasks.
