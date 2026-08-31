// scripts/verify-no-mistakes-runner.mjs - Verification oracle for scripts/no-mistakes.sh
import { execSync } from 'node:child_process';
import fs from 'node:fs';

function verifyRunner() {
  const runner = 'scripts/no-mistakes.sh';
  if (!fs.existsSync(runner)) {
    console.error('Error: scripts/no-mistakes.sh missing');
    process.exit(1);
  }

  // 1. Help check
  const help = execSync(`bash ${runner} help`, { encoding: 'utf8' });
  if (!help.includes('Usage: scripts/no-mistakes.sh')) {
    console.error('Error: Help output mismatch');
    process.exit(1);
  }

  // 2. Doctor check
  const doc = execSync(`bash ${runner} doctor`, { encoding: 'utf8' });
  if (!doc.includes('Diagnostics passed')) {
    console.error('Error: Doctor output mismatch');
    process.exit(1);
  }

  // 3. Status check
  const stat = execSync(`bash ${runner} status`, { encoding: 'utf8' });
  if (!stat.includes('Active Configuration:')) {
    console.error('Error: Status output mismatch');
    process.exit(1);
  }

  // 4. Run pipeline check
  const runOut = execSync(`bash ${runner} run --intent "Test verification run"`, { encoding: 'utf8' });
  if (!runOut.includes('[no-mistakes] Pipeline outcome: checks-passed')) {
    console.error('Error: Pipeline run failed');
    process.exit(1);
  }

  console.log('no-mistakes-runner passed');
  process.exit(0);
}

verifyRunner();
