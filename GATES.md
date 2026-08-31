# Acceptance Ledger: ai-memory Integration

OWNS: plans/**, scripts/**, skills/ai-memory/**, .agents/plugins/ai-memory/**, docs/**, patches/ai-memory/**, .ai-memory.toml, .ai-memory/**

Scope: Acceptance criteria for ai-memory Engine, Submodule tracking, Marker config, Plugin/Skill integration, and Persistent Wiki gates.

- [x] G1: submodule tracking and patch directory immutability verified
  CHECK: node scripts/verify-ai-memory-submodule.mjs
  EXPECT: ai-memory-submodule passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=96c6ccbbd4a400e1f28b5914b23c621ae13ae4d8fff2ddb6fe859c9e21eadd72; output-bytes=27

- [x] G2: runner script executes doctor status remember query and handoff commands
  CHECK: node scripts/verify-ai-memory-runner.mjs
  EXPECT: ai-memory-runner passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=adf92c423988d661a01cb731ca2e583056164432bbecc4858b14aa9a0764d7cc; output-bytes=24

- [x] G3: marker configuration declares workspace project capture and wiki categories
  CHECK: node scripts/verify-ai-memory-marker.mjs
  EXPECT: ai-memory-marker passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=a28847c84e1a86deae93790814496ee1f20f1248b08ca46501501838451419eb; output-bytes=24

- [x] G4: plugin and skill definitions adhere to standard schema
  CHECK: node scripts/verify-ai-memory-skill.mjs
  EXPECT: ai-memory-skill passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=b1030527b1253ad9ef77dfcd356a1210b03e608e83718020f7d9d3cbd8bc43c7; output-bytes=23

- [x] G5: memory engine handles persistence querying handoffs and session finalization
  CHECK: node scripts/verify-ai-memory-engine.mjs
  EXPECT: ai-memory-engine passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=8e4f70b7d95cb9059fd1bba49207e940282cb38371c84455c5c4483cfd17a4fe; output-bytes=24

- [x] G6: zero real absolute filesystem paths across repository
  CHECK: node scripts/verify-no-absolute-paths.mjs
  EXPECT: no-absolute-paths passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=e1f3f809effeffbd93d3ce3c82a103c998867e68b843b02e8eb36098e2f47fc5; output-bytes=25

- [x] G7: gate ledger satisfies strict quality linting
  CHECK: node skills/unlazy/scripts/gate-lint.mjs GATES.md
  EXPECT: LINT OK
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=48630b7361dd44ee870917b12c3d19b9d7bdea738aaca16bb04d4cab83b772d2; output-bytes=8
