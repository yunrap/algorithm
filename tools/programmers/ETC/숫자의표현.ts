export function numberExpress(n: number): number {
  var answer = 0;
  let k = 1;

  while ((k * (k + 1)) / 2 <= n) {
    const numerator = 2 * n - k * (k - 1);
    const denominator = 2 * k;
    const a = numerator / denominator;
    if (a > 0 && Number.isInteger(a)) {
      answer++;
    }
    k++;
  }

  return answer;
}
