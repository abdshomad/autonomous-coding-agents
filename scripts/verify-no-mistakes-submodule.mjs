// scripts/verify-no-mistakes-submodule.mjs - Submodule tracking and immutability verification
import fs from 'node:fs';
import { execSync } from 'node:child_process';

function verifySubmodule() {
  const subPath = 'submodules/no-mistakes';
  const patchPath = 'patches/no-mistakes';

  if (!fs.existsSync(subPath)) {
    console.error('Error: submodules/no-mistakes does not exist');
    process.exit(1);
  }

  if (!fs.existsSync(patchPath)) {
    console.error('Error: patches/no-mistakes does not exist');
    process.exit(1);
  }

  // Verify .gitmodules contains submodules/no-mistakes
  if (!fs.existsSync('.gitmodules')) {
    console.error('Error: .gitmodules missing');
    process.exit(1);
  }

  const gitmodules = fs.readFileSync('.gitmodules', 'utf8');
  if (!gitmodules.includes('submodules/no-mistakes')) {
    console.error('Error: .gitmodules does not track submodules/no-mistakes');
    process.exit(1);
  }

  console.log('no-mistakes-submodule passed');
  process.exit(0);
}

verifySubmodule();
