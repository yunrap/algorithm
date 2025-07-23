function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let pointer = 0;
  for (let index = 1; index < nums.length; index++) {
    // 만약 투포인터 !== index
    if (nums[pointer] !== nums[index]) {
      pointer++; // pointer 한자리수만증가
      nums[pointer] = nums[index]; // 포인터자리에 중복 첫자리수 할당
    }
  }

  return pointer + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

/**
 * url:
 *
 * ✅ good:
 * - 로직그대로 O(n) 복잡도
 *
 * 🔧 bad:
 * - 다시구현
 */
