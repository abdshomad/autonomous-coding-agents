# Acceptance Ledger: Graphify Integration

OWNS: plans/**, scripts/**, skills/graphify/**, .agents/plugins/graphify/**, docs/**

Scope: Acceptance criteria for Graphify Engine, Skill/Plugin integration, and Visual Artifact gates.

- [x] G1: graphify runner script validates environment and CLI availability
  CHECK: node scripts/verify-graphify-runner.mjs
  EXPECT: graphify-runner passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=776dca353330ec2210f92c3f7aff0d2d612753cdf3ebab487522276dfca9d201; output-bytes=23

- [x] G2: ast parsing generates deterministic graph representation in cache directory
  CHECK: node scripts/verify-graphify-ast.mjs
  EXPECT: graphify-ast passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=9ea19bef51ca401f8dc220dd3c56fd21c4e9f665bd1554608f8cf0985310615f; output-bytes=20

- [x] G3: gitignore rules protect graph cache and secret tokens
  CHECK: node scripts/verify-graphify-ignore.mjs
  EXPECT: graphify-ignore passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=ab60b3af291cbd198e5a213740b1242cff50c61f538ad45083a69419de572bad; output-bytes=23

- [x] G4: graphify skill definition matches standard plugin schema
  CHECK: node scripts/verify-graphify-skill.mjs
  EXPECT: graphify-skill passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=40b74be9cd92c05684cdd49770b2c1960eae199d4aecb798521aee0341e60f66; output-bytes=22

- [x] G5: lifecycle contract in AGENTS.md indexes graphify under stage 1 define
  CHECK: node scripts/verify-graphify-lifecycle.mjs
  EXPECT: graphify-lifecycle passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=a161d296ca3ae232f41df22268fddf994af9a0da89e066017faaeb848fb59ff6; output-bytes=26

- [x] G6: query and impact cli commands return structural symbol relations
  CHECK: node scripts/verify-graphify-cli.mjs
  EXPECT: graphify-cli passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=7e45ff19ac0cff7391c90db2f6c1cdcb5519c37ddc4b781d030d8c81b8becc4a; output-bytes=20

- [x] G7: graph visualizer exports interactive graph to docs diagram directory
  CHECK: node scripts/verify-graphify-export.mjs
  EXPECT: graphify-export passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=c6523df2808e8371c4b37b3d7529693daecd186c1dde4d5a0c1cbd53f8455a6b; output-bytes=23

- [x] G8: orientation workflow integrates graphify query output
  CHECK: node scripts/verify-graphify-orientation.mjs
  EXPECT: graphify-orientation passed
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=72587d5eb5d035cce3ff39d1174a438d513cf5495b39902d456abd85d6c5d401; output-bytes=28

- [x] G9: gate ledger satisfies strict quality linting
  CHECK: node skills/unlazy/scripts/gate-lint.mjs GATES.md
  EXPECT: LINT OK
  EVIDENCE: exit=0; shell=/bin/sh; cwd=.; path=23842e7cdffb/64 entries; EXPECT=matched; output-sha256=48630b7361dd44ee870917b12c3d19b9d7bdea738aaca16bb04d4cab83b772d2; output-bytes=8
