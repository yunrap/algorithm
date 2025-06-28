function uniqueOccurrences(arr: number[]): boolean {
  const hashMap = new Map<number, number>();

  for (const a of arr) {
    const value = hashMap.get(a);
    if (!value) {
      hashMap.set(a, 1);
    } else {
      hashMap.set(a, value + 1);
    }
  }

  const counts = [...hashMap.values()];
  const set = new Set(counts);

  return set.size === counts.length;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));

/**
 * url:
 *
 * ✅ good:
 * - hash, map, set 모든사용
 *
 * 🔧 bad:
 * - hashmap.set(a, (hashMap.get(a) || 0 ) + 1)
 * - 줄여서사용
 * - 이터레이터 한번만사용가능
 * 📌 note:
 * -
 */
