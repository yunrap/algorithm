type Graph = [string, string][];
type adjList = { [key: string]: string[] };

function graphDfs(graph: Graph, start: string) {
  const adjList: adjList = {};
  graph.forEach(([u, v]: [string, string]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  console.log(adjList);
}

graphDfs(
  [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
  'A'
);
