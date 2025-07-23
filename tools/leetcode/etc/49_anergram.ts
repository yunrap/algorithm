export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  const map2 = new Map();
  map2.set('key', [3, 2]);
  map2.set('key2', [33]);

  return Array.from(map.values());
}
