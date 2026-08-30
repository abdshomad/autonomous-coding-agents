// scripts/verify-graphify-runner.mjs - Verification oracle for scripts/graphify.sh
import { execSync } from 'node:child_process';
import fs from 'node:fs';

function verifyRunner() {
  const runnerPath = 'scripts/graphify.sh';
  if (!fs.existsSync(runnerPath)) {
    console.error('Error: scripts/graphify.sh does not exist');
    process.exit(1);
  }

  // Test 1: Help command
  const helpOut = execSync('bash scripts/graphify.sh help', { encoding: 'utf8' });
  if (!helpOut.includes('Usage: scripts/graphify.sh')) {
    console.error('Error: Help output mismatch');
    process.exit(1);
  }

  // Test 2: Build command
  const buildOut = execSync('bash scripts/graphify.sh build', { encoding: 'utf8' });
  if (!buildOut.includes('[graphify] Graph build complete.')) {
    console.error('Error: Build command failed');
    process.exit(1);
  }

  // Test 3: Status command
  const statusOut = execSync('bash scripts/graphify.sh status', { encoding: 'utf8' });
  if (!statusOut.includes('Nodes:')) {
    console.error('Error: Status output mismatch');
    process.exit(1);
  }

  console.log('graphify-runner passed');
  process.exit(0);
}

verifyRunner();
