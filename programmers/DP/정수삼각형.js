function solution(triangle) {
  const visited = {};

  function recur(row, col) {
    const key = `${row},${col}`;

    // 탈출조건: 마지막줄이면 자기자신반환
    if (triangle.length - 1 === row) return triangle[row][col];
    if (visited[key] !== undefined) return visited[key];

    const left = recur(row + 1, col);
    const right = recur(row + 1, col + 1);

    visited[key] = triangle[row][col] + Math.max(left, right);
    return visited[key];
  }

  return recur(0, 0);
}

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
