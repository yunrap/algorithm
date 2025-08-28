type Graph = [string, string][];
type GraphList = { [key: string]: string[] };

function graphDf(graph: Graph, start: string) {
  const graphList: GraphList = {};
  const visited = new Set<string>();
  const result: string[] = [];

  graph.forEach(([u, v]: [string, string]) => {
    if (!graphList[u]) graphList[u] = [];
    graphList[u].push(v);
  });

  function dfs(node: string, visited: Set<string>, result: string[]) {
    visited.add(node);
    result.push(node);
    (graphList[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    });
  }

  dfs(start, visited, result);
  return result;
}

const vals = graphDf(
  [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['E', 'F'],
  ],
  'A'
);
console.log(vals); // [ 'A', 'B', 'D', 'E', 'F', 'C' ]
