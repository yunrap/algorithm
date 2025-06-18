// hint: 스테이지별 도전자수를 정리해라
function solution(N: number, stages: number[]) {
  const array = new Array(N + 2).fill(0);

  for (const stage of stages) {
    array[stage] += 1;
  }

  const fails: { [key: string]: number } = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    // 만약 도전자수 없다면
    if (array[i] === 0) {
      fails[i] = 0;
    }

    fails[i] = array[i] / total;

    total -= array[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  return result.map((v) => Number(v[0]));
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
