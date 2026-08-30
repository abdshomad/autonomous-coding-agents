// scripts/verify-graphify-cli.mjs - Verification oracle for graphify CLI commands
import { execSync } from 'node:child_process';

function verifyCliCommands() {
  // Test 1: build
  const buildOut = execSync('bash scripts/graphify.sh build', { encoding: 'utf8' });
  if (!buildOut.includes('[graphify] Graph build complete.')) {
    console.error('Error: build command failed');
    process.exit(1);
  }

  // Test 2: query
  const queryOut = execSync('bash scripts/graphify.sh query scripts/graphify.sh', { encoding: 'utf8' });
  if (!queryOut.includes('Query result for: scripts/graphify.sh')) {
    console.error('Error: query command failed');
    process.exit(1);
  }

  // Test 3: impact
  const impactOut = execSync('bash scripts/graphify.sh impact scripts/graphify.sh', { encoding: 'utf8' });
  if (!impactOut.includes('Impact analysis for: scripts/graphify.sh')) {
    console.error('Error: impact command failed');
    process.exit(1);
  }

  console.log('graphify-cli passed');
  process.exit(0);
}

verifyCliCommands();
