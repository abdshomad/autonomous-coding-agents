// scripts/lib/ast-graph.mjs - Lightweight deterministic AST & dependency extractor
import fs from 'node:fs';
import path from 'node:path';

export function scanSourceFiles(dir, maxDepth = 4, currentDepth = 0) {
  if (currentDepth > maxDepth || !fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative('.', fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      files.push(...scanSourceFiles(fullPath, maxDepth, currentDepth + 1));
    } else if (/\.(mjs|js|sh|md|json)$/.test(entry.name)) {
      files.push(relPath);
    }
  }
  return files;
}

export function extractNodesAndEdges(files) {
  const nodes = [];
  const edges = [];
  const nodeSet = new Set();

  for (const file of files) {
    if (!nodeSet.has(file)) {
      nodeSet.add(file);
      const ext = path.extname(file);
      const stage = file.startsWith('skills/') ? 'orientation' :
                    file.startsWith('plans/') ? 'plan' :
                    file.startsWith('scripts/') ? 'build' :
                    file.startsWith('docs/') ? 'doc' : 'core';
      nodes.push({ id: file, ext, stage, type: 'file' });
    }

    try {
      const content = fs.readFileSync(file, 'utf8');
      const importMatches = content.matchAll(/(?:from\s+['"]([^'"]+)['"]|import\s+['"]([^'"]+)['"])/g);
      for (const match of importMatches) {
        const importTarget = match[1] || match[2];
        if (importTarget && !importTarget.startsWith('node:')) {
          edges.push({
            source: file,
            target: importTarget,
            relation: 'imports'
          });
        }
      }
    } catch {
      // Ignore unreadable files gracefully
    }
  }

  return { nodes, edges };
}

export function buildGraph(cacheDir = '.graphify') {
  const files = scanSourceFiles('.');
  const { nodes, edges } = extractNodesAndEdges(files);

  const payload = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    engine: 'tree-sitter-fallback-ast',
    nodes,
    edges,
    summary: {
      totalNodes: nodes.length,
      totalEdges: edges.length
    }
  };

  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }

  fs.writeFileSync(path.join(cacheDir, 'graph.json'), JSON.stringify(payload, null, 2), 'utf8');
  return payload;
}
