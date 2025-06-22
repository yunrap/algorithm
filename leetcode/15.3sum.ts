// 기준값 i, 왼쪽 i+1, 오른쪽 length-1
// 0.정렬
// 1. i === i+1 continue
// 2. 반복(왼쪽 < 오른쪽) 세값이같다면 temp 배열에 넣기
// 3. 값이 음수면 왼쪽 ++ , 양수면 오른쪽 --
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        // 중복된 l 값 건너뛰기
        while (l < r && nums[l] === nums[l + 1]) l++;
        // 중복된 r 값 건너뛰기
        while (l < r && nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/**
 * url:
 *
 * ✅ good:
 * - 가독성 좋은 코드 작성
 *
 * 🔧 bad:
 * - 중복부분 생각 필요
 *
 * 📌 note
 * - i, left, right 구조 기억하기
 * - while 중복 스킵 조건은 정답 추가 직후에만 수행
 */
