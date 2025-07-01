function lengthOfLongestSubstring(s: string): number {
  const map = new Map();
  let startIdx = 0;
  let longStr = 0;

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    // 여기 포인트, 이미 지나간 중복무시, max 필요
    if (map.has(element)) {
      startIdx = Math.max(startIdx, map.get(element)! + 1);
    }

    map.set(element, index);
    longStr = Math.max(longStr, index - startIdx + 1);
  }

  return longStr;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
