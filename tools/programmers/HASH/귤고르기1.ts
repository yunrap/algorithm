// forEach 사용해서 빈도수 object 만들기

function orange(k: number, tangerine: number[]): number {
  let answer = 0;
  const tDict: { [key: number]: number } = {};
  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
  const tArr = Object.values(tDict).sort((a, b) => b - a);

  for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else return answer;
  }
  return 0;
}

export { orange };
