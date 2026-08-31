# Acceptance Ledger: no-mistakes Integration

OWNS: plans/**, scripts/**, skills/no-mistakes/**, .agents/plugins/no-mistakes/**, docs/**, patches/no-mistakes/**, .no-mistakes.yaml

Scope: Acceptance criteria for no-mistakes Engine, Submodule tracking, Pre-PR pipeline runner, Plugin/Skill integration, and Quality gates.

- [x] G1: submodule tracking and patch directory immutability verified
  CHECK: node scripts/verify-no-mistakes-submodule.mjs
  EXPECT: no-mistakes-submodule passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=9900dd63a6b3325c907e40e08f08fc77b2acc60f7c0bb56a45b2c7e932cd167f; output-bytes=29

- [x] G2: runner script executes doctor status help and pipeline commands
  CHECK: node scripts/verify-no-mistakes-runner.mjs
  EXPECT: no-mistakes-runner passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=c44faff6ed88f79c17cb77f9775661181e4bec0b8640b20b34c839be7c708292; output-bytes=26

- [x] G3: configuration declares multi-agent cascade and gate steps
  CHECK: node scripts/verify-no-mistakes-config.mjs
  EXPECT: no-mistakes-config passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=1a351abc80926ab33fda493b11e9f9d072007f936cdc449fd2fafd3cf14ac32c; output-bytes=26

- [x] G4: plugin and skill definitions adhere to standard schema
  CHECK: node scripts/verify-no-mistakes-skill.mjs
  EXPECT: no-mistakes-skill passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=95adfaeada92789725951b81f4e50bbc102fbe9450c22483458e32b25b057407; output-bytes=25

- [x] G5: debt escalation hook logs unresolved findings to debt ledger
  CHECK: node scripts/verify-no-mistakes-escalation.mjs
  EXPECT: no-mistakes-escalation passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=f087e0b5a5cf474ad17428ef2c4412d5bbdf7a0fcd074f951e57d3c08a526f00; output-bytes=30

- [x] G6: zero real absolute filesystem paths across repository
  CHECK: node scripts/verify-no-absolute-paths.mjs
  EXPECT: no-absolute-paths passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=e1f3f809effeffbd93d3ce3c82a103c998867e68b843b02e8eb36098e2f47fc5; output-bytes=25

- [x] G7: gate ledger satisfies strict quality linting
  CHECK: node skills/unlazy/scripts/gate-lint.mjs GATES.md
  EXPECT: LINT OK
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=48630b7361dd44ee870917b12c3d19b9d7bdea738aaca16bb04d4cab83b772d2; output-bytes=8
