# Acceptance Ledger: Core Enhancements

OWNS: plans/**, scripts/**, tests/**, docs/**, data/**

Scope: Acceptance criteria for Core Architecture, Planning Roadmap, and UI Environment switching tasks.

- [ ] G1: task selector scores impact and builds dependency tree
  CHECK: node scripts/verify-task-selector.mjs
  EXPECT: task-selector passed
  EVIDENCE: pending

- [ ] G2: test runner intercepts execution output and enforces green tests
  CHECK: node scripts/verify-test-runner.mjs
  EXPECT: test-runner passed
  EVIDENCE: pending

- [ ] G3: file size linter enforces 256 LOC ceiling and cyclomatic complexity limits
  CHECK: node scripts/verify-loc-linter.mjs
  EXPECT: loc-linter passed
  EVIDENCE: pending

- [ ] G4: milestone framework validates multi-phase release gates
  CHECK: node scripts/verify-milestones.mjs
  EXPECT: milestone-framework passed
  EVIDENCE: pending

- [ ] G5: feature doc sync updates docs/features index on task completion
  CHECK: node scripts/verify-doc-sync.mjs
  EXPECT: doc-sync passed
  EVIDENCE: pending

- [ ] G6: roadmap visualizer generates valid mermaid graph syntax
  CHECK: node scripts/verify-roadmap-viz.mjs
  EXPECT: roadmap-viz passed
  EVIDENCE: pending

- [ ] G7: mockup api layer returns fixtures from data/mockup/
  CHECK: node scripts/verify-mockup-api.mjs
  EXPECT: mockup-api passed
  EVIDENCE: pending

- [ ] G8: ui switcher toggles demo vs live runtime modes
  CHECK: node scripts/verify-runtime-toggle.mjs
  EXPECT: runtime-toggle passed
  EVIDENCE: pending

- [ ] G9: config manager switches between cloud and local backends
  CHECK: node scripts/verify-backend-config.mjs
  EXPECT: backend-config passed
  EVIDENCE: pending
