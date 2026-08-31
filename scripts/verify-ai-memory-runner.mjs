// scripts/verify-ai-memory-runner.mjs - Verification oracle for scripts/ai-memory.sh
import { execSync } from 'node:child_process';
import fs from 'node:fs';

function verifyRunner() {
  const runner = 'scripts/ai-memory.sh';
  if (!fs.existsSync(runner)) {
    console.error('Error: scripts/ai-memory.sh missing');
    process.exit(1);
  }

  const help = execSync(`bash ${runner} help`, { encoding: 'utf8' });
  if (!help.includes('Usage: scripts/ai-memory.sh')) {
    console.error('Error: Help output mismatch');
    process.exit(1);
  }

  const doc = execSync(`bash ${runner} doctor`, { encoding: 'utf8' });
  if (!doc.includes('Diagnostics passed')) {
    console.error('Error: Doctor output mismatch');
    process.exit(1);
  }

  const rem = execSync(`bash ${runner} remember decisions "Test Runner Decision" "Content verified"`, { encoding: 'utf8' });
  if (!rem.includes('Stored memory page:')) {
    console.error('Error: Remember command failed');
    process.exit(1);
  }

  const q = execSync(`bash ${runner} query "Test Runner"`, { encoding: 'utf8' });
  if (!q.includes('matches')) {
    console.error('Error: Query output mismatch');
    process.exit(1);
  }

  console.log('ai-memory-runner passed');
  process.exit(0);
}

verifyRunner();
