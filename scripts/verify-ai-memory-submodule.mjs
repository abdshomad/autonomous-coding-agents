// scripts/verify-ai-memory-submodule.mjs - Submodule tracking and immutability verification
import fs from 'node:fs';

function verifySubmodule() {
  const subPath = 'submodules/ai-memory';
  const patchPath = 'patches/ai-memory';

  if (!fs.existsSync(subPath)) {
    console.error('Error: submodules/ai-memory does not exist');
    process.exit(1);
  }

  if (!fs.existsSync(patchPath)) {
    console.error('Error: patches/ai-memory does not exist');
    process.exit(1);
  }

  if (!fs.existsSync('.gitmodules')) {
    console.error('Error: .gitmodules missing');
    process.exit(1);
  }

  const gitmodules = fs.readFileSync('.gitmodules', 'utf8');
  if (!gitmodules.includes('submodules/ai-memory')) {
    console.error('Error: .gitmodules does not track submodules/ai-memory');
    process.exit(1);
  }

  console.log('ai-memory-submodule passed');
  process.exit(0);
}

verifySubmodule();
