// 배열만큼 다더하기
function maximumWealth(accounts: number[][]): number {
  let compareCt = 0;
  accounts.forEach((data) => {
    let accSum = 0;
    data.forEach((dt) => (accSum += dt));
    if (compareCt < accSum) compareCt = accSum;
  });
  return compareCt;
}

/**
 * url: https://leetcode.com/problems/richest-customer-wealth/description/
 *
 * ✅ good:
 * - forEach 로 누적합계산
 * -
 *
 * 🔧 bad:
 * - for of로 직관적사용
 * - 누적합 reduce 활용
 * - 초기값 Number.MIN_SAFE_INTEGER 사용으로 음수도정확히 처리
 */
