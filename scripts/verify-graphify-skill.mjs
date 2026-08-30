// scripts/verify-graphify-skill.mjs - Verification oracle for plugin.json and SKILL.md
import fs from 'node:fs';

function verifySkillSchema() {
  const pluginJsonPath = '.agents/plugins/graphify/plugin.json';
  if (!fs.existsSync(pluginJsonPath)) {
    console.error('Error: .agents/plugins/graphify/plugin.json not found');
    process.exit(1);
  }

  const plugin = JSON.parse(fs.readFileSync(pluginJsonPath, 'utf8'));
  if (plugin.name !== 'graphify' || !plugin.version || !plugin.repository) {
    console.error('Error: plugin.json missing required metadata');
    process.exit(1);
  }

  const skillPath = 'skills/graphify/SKILL.md';
  if (!fs.existsSync(skillPath)) {
    console.error('Error: skills/graphify/SKILL.md not found');
    process.exit(1);
  }

  const skillContent = fs.readFileSync(skillPath, 'utf8');
  if (!skillContent.includes('name: graphify') || !skillContent.includes('description:')) {
    console.error('Error: SKILL.md frontmatter invalid');
    process.exit(1);
  }

  console.log('graphify-skill passed');
  process.exit(0);
}

verifySkillSchema();
