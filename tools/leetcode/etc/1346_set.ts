function checkIfExist(arr: number[]): boolean {
  const set = new Set(arr);

  for (const a of set) {
    if (set.has(a * 2)) return true;
  }
  return false;
}

checkIfExist([10, 2, 5, 3]);
