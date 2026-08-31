// scripts/verify-ai-memory-marker.mjs - Verification oracle for .ai-memory.toml
import fs from 'node:fs';

function verifyMarker() {
  const marker = '.ai-memory.toml';
  if (!fs.existsSync(marker)) {
    console.error('Error: .ai-memory.toml missing');
    process.exit(1);
  }

  const content = fs.readFileSync(marker, 'utf8');
  const required = ['[workspace]', 'name =', 'storage_path =', '[project]', '[capture]', '[slots]', '[wiki]'];
  for (const r of required) {
    if (!content.includes(r)) {
      console.error(`Error: .ai-memory.toml missing section: ${r}`);
      process.exit(1);
    }
  }

  console.log('ai-memory-marker passed');
  process.exit(0);
}

verifyMarker();
