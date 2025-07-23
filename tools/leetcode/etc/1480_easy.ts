// 배열자리수만큼 돌아가면서 누적합 누적
function runningSum(nums: number[]): number[] {
  let accSum = 0;
  nums.forEach((num, i) => {
    accSum += num;
    nums[i] = accSum;
  });
  return nums;
}

console.log(runningSum([1, 2, 3, 4]));
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
