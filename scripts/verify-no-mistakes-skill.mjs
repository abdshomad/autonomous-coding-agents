// scripts/verify-no-mistakes-skill.mjs - Verification oracle for plugin & skill definition
import fs from 'node:fs';

function verifySkill() {
  const pluginPath = '.agents/plugins/no-mistakes/plugin.json';
  const skillPath = 'skills/no-mistakes/SKILL.md';

  if (!fs.existsSync(pluginPath)) {
    console.error('Error: plugin.json missing');
    process.exit(1);
  }

  const plugin = JSON.parse(fs.readFileSync(pluginPath, 'utf8'));
  if (plugin.name !== 'no-mistakes' || !plugin.repository) {
    console.error('Error: Invalid plugin.json schema');
    process.exit(1);
  }

  if (!fs.existsSync(skillPath)) {
    console.error('Error: SKILL.md missing');
    process.exit(1);
  }

  const skill = fs.readFileSync(skillPath, 'utf8');
  if (!skill.startsWith('---') || !skill.includes('name: no-mistakes')) {
    console.error('Error: Invalid SKILL.md frontmatter');
    process.exit(1);
  }

  console.log('no-mistakes-skill passed');
  process.exit(0);
}

verifySkill();
