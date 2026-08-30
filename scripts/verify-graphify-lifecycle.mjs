// scripts/verify-graphify-lifecycle.mjs - Verification oracle for AGENTS.md lifecycle mapping
import fs from 'node:fs';

function verifyLifecycleMapping() {
  const agentsMd = fs.readFileSync('AGENTS.md', 'utf8');
  if (!agentsMd.includes('skills/graphify/')) {
    console.error('Error: AGENTS.md missing skills/graphify/ in lifecycle table');
    process.exit(1);
  }

  const skillsReadme = fs.readFileSync('skills/README.md', 'utf8');
  if (!skillsReadme.includes('graphify')) {
    console.error('Error: skills/README.md missing graphify skill entry');
    process.exit(1);
  }

  console.log('graphify-lifecycle passed');
  process.exit(0);
}

verifyLifecycleMapping();
