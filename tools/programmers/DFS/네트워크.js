// 네트워크 개수를 return해라 (연결되면 1로 , 아니면 ++)
// 모든배열의 1자리수는 1이랑연결여부, 2자리수는 2랑연결여부

function network(n, computers) {
  var answer = 0;
  const visited = new Array(n).fill(false);

  //recur
  function src(node) {
    visited[node] = true;
    for (let i = 0; i < n; i++) {
      if (node === i) continue; // 자기 자신은 제외
      if (computers[node][i] === 1 && !visited[i]) {
        src(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      src(i);
      answer++;
    }
  }
  return answer;
}

console.log(
  network(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
