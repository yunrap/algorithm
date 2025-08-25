// numbers 배열이 주어질 때, 각 숫자를 + 혹은 - 로 더해서 만들 수 있는 모든 가능한 합을 배열로 반환하세요.
function allSums(numbers: number[]): number[] {
  const results: number[] = [];
  function dfs(index: number, sum: number) {
    if (index === numbers.length) {
      results.push(sum);
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  dfs(0, 0);
  return results;
}

console.log(allSums([1, 2]));
