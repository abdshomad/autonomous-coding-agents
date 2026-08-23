# Next Platform Enhancements Plan

> **Workflow Notice (`e` / `n`)**: Update this active task list using trigger `e`. Execute top tasks using trigger `n` or `n{x}`.

## 1. Core Architecture & Workflow Engine
- [ ] `1.1` Establish automated task selector based on impact scoring and prerequisite dependency trees.
- [ ] `1.2` Implement structured test validation runner that intercepts execution output and validates against baseline suites.
- [ ] `1.3` Integrate automated file size linter to warn and refactor files approaching the 256 LOC threshold.

## 2. Planning & Roadmap Orchestration
- [ ] `2.1` Scaffold standard multi-phase milestone execution framework with verification gates.
- [ ] `2.2` Add automatic synchronization between completed tasks in `plans/` and modular feature logs in `docs/feature-list/`.
- [ ] `2.3` Implement roadmap visualization generator supporting markdown tables and mermaid dependency graphs.

## 3. UI & Environment Switching
- [ ] `3.1` Build interactive Mockup API layer that loads structured mock data from `data/mockup/`.
- [ ] `3.2` Implement unified UI toggle control for switching seamlessly between Demo (Mock) and Live (Real) runtime modes.
- [ ] `3.3` Add persistent configuration switcher for Cloud (remote API) vs Local (on-premise) deployment targets.
