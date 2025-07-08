export default function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  const seen = new Map<string, number>();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if (seen.has(currentChar)) {
      left = Math.max(left, seen.get(currentChar)! + 1);
    }
    seen.set(currentChar, right);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

console.log(lengthOfLongestSubstring('acbabcbb'));
