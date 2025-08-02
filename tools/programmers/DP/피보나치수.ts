function fibonachi(n: number): number {
  let dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

export { fibonachi };

console.log(fibonachi(100000));
