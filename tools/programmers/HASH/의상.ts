function clothesFn(clothes: string[][]): number {
  var answer = 0;
  let map = new Map();

  for (const [_, category] of clothes) {
    map.set(category, map.get(category) ? map.get(category) + 1 : 1);
  }

  let count = 1;
  for (const value of map.values()) {
    count *= value + 1;
  }

  return count - 1;
}

export { clothesFn };
