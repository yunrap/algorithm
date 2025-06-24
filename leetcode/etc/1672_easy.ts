// 배열만큼 다더하기
function maximumWealth(accounts: number[][]): number {
  let compareCt = Number.MIN_SAFE_INTEGER;
  for (const account of accounts) {
    const result = account.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    if (compareCt < result) compareCt = result;
  }

  return compareCt;
}

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);

/**
 * url: https://leetcode.com/problems/richest-customer-wealth/description/
 *
 * ✅ good:
 * - for of로 직관적사용
 * - 누적합 reduce 활용
 * - 초기값 Number.MIN_SAFE_INTEGER 사용으로 음수도정확히 처리
 * -
 *
 * 🔧 bad:
 * - map,reduce써서 더한배열활용, Math.max로 최대값구하기

 */
