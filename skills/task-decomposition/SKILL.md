---
name: task-decomposition
description: Decompose product requirements into strictly structured, 3-task enhancement plans per module.
stage: 2-plan
trigger: e / focus: / unfocus
---

# Task Decomposition (Plan Stage)

## 🎯 Purpose
Decompose requirements from `docs/prd/` and existing architecture into clean, verifiable enhancement tasks in `plans/next-enhancements.md`.

## 📋 Step-by-Step Checklist
1. **Ingest Ephemeral User Focus (`plans/focus.md`)**:
   - Inspect `plans/focus.md`. If it contains `[FOCUS]: <direction>` (not `none`), prioritize that focus for this 1 batch (3 tasks).
   - If the previous focus batch is complete or user typed `focus: reset` / `unfocus`, reset `plans/focus.md` to `[FOCUS]: none` and resume planning directly from `docs/prd/`.


2. **Analyze Requirements & State**: Read `docs/prd/`, `plans/next-enhancements.md`, and `docs/features/`.
3. **Identify Application Sections**: List each primary functional module of the application.
4. **Draft Enhancements**: Define **exactly 3 new enhancements per section** in `plans/next-enhancements.md` with:
   - Unique identifier (e.g. `1.1`, `1.2`, `1.3`).
   - Clear, functional description anchored in PRD specifications (and user focus).
   - Initial status set to `[TODO]`.
5. **Present Plan**: Present the plan to the user in a clear summary table.

## 🛑 Anti-Rationalization Table

| Excuse | Reality | Action |
|:---|:---|:---|
| *"I'll ignore active directives in plans/focus.md."* | User focus is authoritative and overrides default sequence. | Ingest `[FOCUS]` items and prioritize them in the plan. |
| *"I'll only add 1 task because the module is small."* | Violates the 3-task discipline contract and limits planning foresight. | Always define exactly 3 strategic tasks. |
| *"I'll make tasks vague so I have implementation flexibility."* | Ambiguous tasks cause execution drift. | Write explicit, measurable task statements. |
| *"I don't need to check docs/prd/."* | Unanchored tasks diverge from product requirements. | Re-read `docs/prd/` before proposing tasks. |



## ✅ Verification Gate
- [ ] Exactly 3 enhancements per section defined in `plans/next-enhancements.md`.
- [ ] All tasks start with `[TODO]` status.
