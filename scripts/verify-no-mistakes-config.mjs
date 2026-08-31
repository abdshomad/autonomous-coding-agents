// scripts/verify-no-mistakes-config.mjs - Verification oracle for .no-mistakes.yaml
import fs from 'node:fs';

function verifyConfig() {
  const configPath = '.no-mistakes.yaml';
  if (!fs.existsSync(configPath)) {
    console.error('Error: .no-mistakes.yaml missing');
    process.exit(1);
  }

  const content = fs.readFileSync(configPath, 'utf8');
  const requiredKeys = ['agents:', 'antigravity', 'commands:', 'lint:', 'gate:', 'test:', 'auto_fix:', 'push_target:'];
  for (const k of requiredKeys) {
    if (!content.includes(k)) {
      console.error(`Error: .no-mistakes.yaml missing key ${k}`);
      process.exit(1);
    }
  }

  console.log('no-mistakes-config passed');
  process.exit(0);
}

verifyConfig();
