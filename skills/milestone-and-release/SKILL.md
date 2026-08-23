---
name: milestone-and-release
description: Coordinate multi-phase milestone rollouts, Cloud vs Local deployment switching, and release changelogs.
stage: 6-ship
trigger: d / m
---

# Milestone & Release (Ship Stage)

## 🎯 Purpose
Execute structured multi-phase epic plans in `plans/roadmaps/`, manage Cloud vs Local deployment configurations, and prepare verified production releases.

## 📋 Step-by-Step Checklist
1. **Milestone Roadmaps (`m`)**:
   - Read epic plan in `plans/roadmaps/<epic>/README.md`.
   - Sequentially execute phase deliverables (e.g. `scaffolding.md`, `services.md`).
   - Maintain deliverable checklists and update status upon phase verification.
2. **Environment Routing Switcher (`d`)**:
   - Ensure environment configuration supports both **Cloud** (remote endpoints) and **Local** (on-premise).
   - Verify Mock API layer in `data/mockup/` with the **Demo vs Live** UI toggle.
3. **Packaging & Release**:
   - Package production build artifacts.
   - Generate release version notes and verify deployment health.

## 🛑 Anti-Rationalization Table

| Excuse | Reality | Action |
|:---|:---|:---|
| *"I'll skip phase 1 verification and start phase 2 directly."* | Skipping phases causes cascading integration failures. | Verify phase criteria completely before advancing. |
| *"Hardcoding remote URLs is fine for now."* | Prevents on-premise and local offline deployments. | Use runtime environment switcher (Cloud vs Local). |

## ✅ Verification Gate
- [ ] Roadmap checklist updated in `plans/roadmaps/`.
- [ ] Build packages without errors; environment switchers verified.
