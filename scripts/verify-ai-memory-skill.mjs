// scripts/verify-ai-memory-skill.mjs - Verification oracle for ai-memory plugin and skill
import fs from 'node:fs';

function verifySkill() {
  const pluginPath = '.agents/plugins/ai-memory/plugin.json';
  const skillPath = 'skills/ai-memory/SKILL.md';

  if (!fs.existsSync(pluginPath)) {
    console.error('Error: plugin.json missing');
    process.exit(1);
  }

  const plugin = JSON.parse(fs.readFileSync(pluginPath, 'utf8'));
  if (plugin.name !== 'ai-memory' || !plugin.repository) {
    console.error('Error: Invalid plugin.json schema');
    process.exit(1);
  }

  if (!fs.existsSync(skillPath)) {
    console.error('Error: SKILL.md missing');
    process.exit(1);
  }

  const skill = fs.readFileSync(skillPath, 'utf8');
  if (!skill.startsWith('---') || !skill.includes('name: ai-memory')) {
    console.error('Error: Invalid SKILL.md frontmatter');
    process.exit(1);
  }

  console.log('ai-memory-skill passed');
  process.exit(0);
}

verifySkill();
