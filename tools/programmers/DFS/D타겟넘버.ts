export function solution(numbers: number[], target: number): number {
  let count = 0;

  function dfs(index: number, sum: number) {
    if (index === numbers.length) {
      if (sum === target) count++;
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return count;
}

solution([1, 1, 1, 1, 1], 3);
