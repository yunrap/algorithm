// 배열자리수만큼 돌아가면서 누적합 누적
function runningSum(nums: number[]): number[] {
  const sum = new Array(nums.length); // 배열고정하면 더최적화
  let accSum = 0;

  nums.forEach((num, idx) => {
    accSum = num + accSum;
    sum[idx] = accSum;
  });

  return sum;
}
/**
 * url: https://leetcode.com/problems/running-sum-of-1d-array/
 *
 * ✅ good:
 * - 배열고정으로 메모리할당 감소
 * - 고정된배열 빠른인덱스 접근
 *
 * 🔧 bad:
 * - 누적합 nums 변수만사용 O(N)
 */
