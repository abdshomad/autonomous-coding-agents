// scripts/verify-graphify-ignore.mjs - Verification oracle for gitignore and semantic toggle
import fs from 'node:fs';
import { execSync } from 'node:child_process';

function verifyIgnoreAndConfig() {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  if (!gitignore.includes('.graphify/')) {
    console.error('Error: .graphify/ not found in .gitignore');
    process.exit(1);
  }

  const out = execSync('bash scripts/graphify.sh build --semantic', {
    encoding: 'utf8',
    env: { ...process.env, GRAPHIFY_SEMANTIC: '1' }
  });

  if (!out.includes('Semantic enrichment enabled')) {
    console.error('Error: Semantic enrichment toggle not detected in runner');
    process.exit(1);
  }

  console.log('graphify-ignore passed');
  process.exit(0);
}

verifyIgnoreAndConfig();
