// scripts/verify-no-absolute-paths.mjs - Enforce zero full/absolute paths across repository
import fs from 'node:fs';
import path from 'node:path';

// Match real absolute filesystem paths (e.g., /mnt/..., /home/..., /Users/..., file:///..., C:\...)
const REAL_FS_PATH = /(?:file:\/\/\/|(?:^|[\s"'`([<{])(?:\/mnt\/|\/home\/|\/Users\/|[a-zA-Z]:\\))/;
const IGNORE_DIRS = new Set(['.git', 'node_modules', '.graphify', '.venv-graphify']);

function checkDirectory(dir) {
  const violations = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative('.', fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      violations.push(...checkDirectory(fullPath));
    } else if (/\.(md|mjs|js|sh|json)$/.test(entry.name) && entry.name !== 'verify-no-absolute-paths.mjs') {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split(/\r?\n/);
      lines.forEach((line, idx) => {
        // Skip regex definitions or comments describing absolute path patterns
        if (/^\s*(const|let|var)\s+[A-Z_]+\s*=\s*\//.test(line)) return;
        if (line.includes('no full/absolute paths') || line.includes('ABSOLUTE_PATH') || line.includes('file:///...')) return;
        if (REAL_FS_PATH.test(line)) {
          violations.push({ file: relPath, line: idx + 1, text: line.trim() });
        }
      });
    }
  }
  return violations;
}

const violations = checkDirectory('.');
if (violations.length > 0) {
  console.error('LINT FINDINGS: Real absolute filesystem paths detected:');
  violations.forEach(v => console.error(`  ${v.file}:${v.line} -> ${v.text}`));
  process.exit(1);
}

console.log('no-absolute-paths passed');
process.exit(0);
