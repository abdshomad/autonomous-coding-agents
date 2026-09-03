// scripts/verify-all-submodules.mjs - Comprehensive health oracle for all 10 git submodules
import fs from 'node:fs';

const SUBMODULES = [
  'ai-memory',
  'archify',
  'caveman',
  'gauntlet-loop',
  'graphify',
  'grill-me',
  'how',
  'no-mistakes',
  'ponytail',
  'unlazy'
];

function verifyAllSubmodules() {
  if (!fs.existsSync('.gitmodules')) {
    console.error('Error: .gitmodules missing');
    process.exit(1);
  }

  const gitmodules = fs.readFileSync('.gitmodules', 'utf8');

  for (const name of SUBMODULES) {
    const subDir = `submodules/${name}`;
    const patchDir = `patches/${name}`;
    const pluginJson = `.agents/plugins/${name}/plugin.json`;

    // 1. Directory existence
    if (!fs.existsSync(subDir)) {
      console.error(`Error: submodule directory missing: ${subDir}`);
      process.exit(1);
    }

    // 2. .gitmodules registration
    if (!gitmodules.includes(`[submodule "submodules/${name}"]`)) {
      console.error(`Error: .gitmodules missing entry for ${name}`);
      process.exit(1);
    }

    // 3. Patches overlay existence
    if (!fs.existsSync(patchDir)) {
      console.error(`Error: patches overlay directory missing: ${patchDir}`);
      process.exit(1);
    }

    // 4. Plugin parity check
    if (fs.existsSync(pluginJson)) {
      const plugin = JSON.parse(fs.readFileSync(pluginJson, 'utf8'));
      if (!plugin.repository) {
        console.error(`Error: plugin.json missing repository for ${name}`);
        process.exit(1);
      }
    }
  }

  console.log('all-submodules passed');
  process.exit(0);
}

verifyAllSubmodules();
