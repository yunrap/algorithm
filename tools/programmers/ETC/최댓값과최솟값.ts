function solution(s: string) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  const str = s.split(' ');

  for (const s of str) {
    const num = Number(s);
    if (min > num) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
  }
  return `${min} ${max}`;
}

console.log(solution('1 2 3 4'));
// 1 4
