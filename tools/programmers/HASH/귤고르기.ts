function orange(k: number, tangerine: number[]): number {
  var map = new Map<number, number>();
  for (let size of tangerine) {
    map.set(size, (map.get(size) || 0) + 1);
  }
  const sortedSizes = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  let count = 0;
  for (let [_, num] of sortedSizes) {
    count += 1;
    k -= num;
    if (k <= 0) {
      return count;
    }
  }

  return 0;
}

export { orange };
