# Acceptance Ledger: Full Submodules Architecture Expansion

OWNS: plans/**, scripts/**, submodules/**, patches/**, .gitmodules, docs/**

Scope: Acceptance criteria for full 9-submodule matrix tracking, sync manager, patch overlays, and immutability health.

- [x] G1: all 9 git submodules verified across tracking directories and plugin parity
  CHECK: node scripts/verify-all-submodules.mjs
  EXPECT: all-submodules passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=41af147455c947c491a4669ea8059a797bcc9302c643a265c705c65446b3f666; output-bytes=22

- [x] G2: submodule sync runner executes health verification across matrix
  CHECK: bash scripts/submodules-sync.sh check
  EXPECT: All 9 submodules healthy and tracked.
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=5a5f6d715ce9930c7832e3e418cc66815c35274a594602d511f89424f170c906; output-bytes=484

- [x] G3: pre-pr quality gate proxy runner passes verification
  CHECK: node scripts/verify-no-mistakes-runner.mjs
  EXPECT: no-mistakes-runner passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=c44faff6ed88f79c17cb77f9775661181e4bec0b8640b20b34c839be7c708292; output-bytes=26

- [x] G4: persistent memory wiki and handoff runner passes verification
  CHECK: node scripts/verify-ai-memory-runner.mjs
  EXPECT: ai-memory-runner passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=adf92c423988d661a01cb731ca2e583056164432bbecc4858b14aa9a0764d7cc; output-bytes=24

- [x] G5: zero real absolute filesystem paths across repository
  CHECK: node scripts/verify-no-absolute-paths.mjs
  EXPECT: no-absolute-paths passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=e1f3f809effeffbd93d3ce3c82a103c998867e68b843b02e8eb36098e2f47fc5; output-bytes=25

- [x] G6: gate ledger satisfies strict quality linting
  CHECK: node skills/unlazy/scripts/gate-lint.mjs GATES.md
  EXPECT: LINT OK
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=48630b7361dd44ee870917b12c3d19b9d7bdea738aaca16bb04d4cab83b772d2; output-bytes=8
