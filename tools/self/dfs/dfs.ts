const graphs: { [key: number]: number[] } = { 0: [1, 2], 1: [3], 2: [3, 4], 3: [5], 4: [], 5: [] };
const start = 0;
const target = 5;

function dfs(graph: { [key: number]: number[] }, start: number, target: number, visited = new Set()): boolean {
  if (start === target) return true;
  if (!graph[start]) return false;
  if (visited.has(start)) return false;
  visited.add(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, target);
  }
  return false;
}

dfs(graphs, start, target);
