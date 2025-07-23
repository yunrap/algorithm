function solution(n, lost, reserve) {
  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  console.log(realLost);
  console.log(realReserve);

  let answer = n - realLost.length;

  for (let i = 0; i < answer; i++) {
    let student = realLost[i];
    let idx = realReserve.findIndex((r) => Math.abs(r - student) === 1);
    if (idx !== -1) {
      answer++;
      realReserve.splice(idx, 1);
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
