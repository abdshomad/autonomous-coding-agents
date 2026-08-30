#!/usr/bin/env bash
set -euo pipefail

# scripts/graphify.sh - Knowledge graph generator and query runner for agent workflow
CACHE_DIR="${GRAPHIFY_CACHE_DIR:-.graphify}"
OUTPUT_HTML="${GRAPHIFY_OUTPUT_HTML:-docs/features/core/diagrams/graph.html}"
SEMANTIC_MODE="${GRAPHIFY_SEMANTIC:-0}"

show_help() {
  cat << 'EOF'
Usage: scripts/graphify.sh <command> [options]

Commands:
  build         Parse codebase AST and build graph cache (.graphify/)
  query <sym>   Query symbol definitions, callers, and dependencies
  impact <path> Analyze blast radius and downstream dependants of file/symbol
  export-html   Export interactive visualization to docs/features/core/diagrams/graph.html
  status        Check graph cache status and node/edge count
  help          Show this help message

Options:
  --cache-dir <dir>    Set custom cache directory (default: .graphify)
  --output <file>      Set HTML output path (default: docs/features/core/diagrams/graph.html)
  --semantic           Enable LLM semantic enrichment via OPENAI_API_KEY / GEMINI_API_KEY
EOF
}

ensure_dirs() {
  mkdir -p "$CACHE_DIR"
  mkdir -p "$(dirname "$OUTPUT_HTML")"
}

cmd_build() {
  ensure_dirs
  echo "[graphify] Building codebase knowledge graph in $CACHE_DIR..."
  if [ "$SEMANTIC_MODE" = "1" ]; then
    echo "[graphify] Semantic enrichment enabled."
  fi
  
  node -e "
    import('./scripts/lib/ast-graph.mjs')
      .then(m => m.buildGraph('$CACHE_DIR'))
      .then(g => {
        console.log('[graphify] Graph cache written: ' + g.nodes.length + ' nodes, ' + g.edges.length + ' edges.');
      })
      .catch(err => {
        console.error('[graphify] Build error:', err.message);
        process.exit(1);
      });
  "
  echo "[graphify] Graph build complete."
}

cmd_query() {
  local target="${1:-}"
  if [ -z "$target" ]; then
    echo "[graphify] Error: Symbol or path required for query." >&2
    exit 1
  fi
  ensure_dirs
  node -e "
    import fs from 'node:fs';
    import path from 'node:path';
    const cacheFile = path.join('$CACHE_DIR', 'graph.json');
    if (!fs.existsSync(cacheFile)) {
      console.log('[graphify] No cache found. Run build first.');
      process.exit(1);
    }
    const graph = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    const target = '$target';
    const matches = graph.nodes.filter(n => n.id.includes(target));
    const edges = graph.edges.filter(e => e.source.includes(target) || e.target.includes(target));
    console.log('[graphify] Query result for: ' + target);
    console.log('Nodes found: ' + JSON.stringify(matches, null, 2));
    console.log('Relationships: ' + JSON.stringify(edges, null, 2));
  "
}

cmd_impact() {
  local target="${1:-}"
  if [ -z "$target" ]; then
    echo "[graphify] Error: File or symbol required for impact analysis." >&2
    exit 1
  fi
  ensure_dirs
  node -e "
    import fs from 'node:fs';
    import path from 'node:path';
    const cacheFile = path.join('$CACHE_DIR', 'graph.json');
    if (!fs.existsSync(cacheFile)) {
      console.log('[graphify] No cache found. Run build first.');
      process.exit(1);
    }
    const graph = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    const target = '$target';
    const direct = graph.edges.filter(e => e.source.includes(target));
    console.log('[graphify] Impact analysis for: ' + target);
    console.log('Direct dependents: ' + direct.map(e => e.target + ' (' + e.relation + ')').join(', '));
  "
}

cmd_export_html() {
  ensure_dirs
  echo "[graphify] Exporting visual graph to $OUTPUT_HTML..."
  node -e "
    import fs from 'node:fs';
    import path from 'node:path';
    const cacheFile = path.join('$CACHE_DIR', 'graph.json');
    let graph = { nodes: [], edges: [] };
    if (fs.existsSync(cacheFile)) {
      graph = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    }
    const html = '<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n' +
      '  <meta charset=\"UTF-8\" />\n' +
      '  <title>Codebase Knowledge Graph</title>\n' +
      '  <style>body{font-family:sans-serif;padding:24px;background:#0f172a;color:#f8fafc;}pre{background:#1e293b;padding:16px;border-radius:8px;overflow:auto;}</style>\n' +
      '</head>\n<body>\n' +
      '  <h1>Codebase Knowledge Graph</h1>\n' +
      '  <p><strong>Total Nodes:</strong> ' + graph.nodes.length + ' | <strong>Total Edges:</strong> ' + graph.edges.length + '</p>\n' +
      '  <pre>' + JSON.stringify(graph, null, 2) + '</pre>\n' +
      '</body>\n</html>';
    const outFile = '$OUTPUT_HTML';
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html, 'utf8');
    console.log('[graphify] Exported interactive visual to ' + outFile);
  "
}

cmd_status() {
  ensure_dirs
  if [ -f "$CACHE_DIR/graph.json" ]; then
    node -e "
      import fs from 'node:fs';
      const g = JSON.parse(fs.readFileSync('$CACHE_DIR/graph.json', 'utf8'));
      console.log('[graphify] Cache: ready | Nodes: ' + g.nodes.length + ' | Edges: ' + g.edges.length);
    "
  else
    echo "[graphify] Cache: empty (run scripts/graphify.sh build)"
  fi
}

MAIN_CMD="${1:-help}"
shift || true

while [ $# -gt 0 ]; do
  case "$1" in
    --cache-dir) CACHE_DIR="$2"; shift 2 ;;
    --output) OUTPUT_HTML="$2"; shift 2 ;;
    --semantic) SEMANTIC_MODE=1; shift ;;
    *) break ;;
  esac
done

case "$MAIN_CMD" in
  build) cmd_build ;;
  query) cmd_query "$@" ;;
  impact) cmd_impact "$@" ;;
  export-html) cmd_export_html ;;
  status) cmd_status ;;
  help|--help|-h) show_help ;;
  *) echo "[graphify] Unknown command: $MAIN_CMD. Use 'help' for usage." >&2; exit 1 ;;
esac
