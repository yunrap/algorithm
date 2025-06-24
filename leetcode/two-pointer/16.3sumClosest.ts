// 투포인터잡기
// 누적값 - target = 절대값이 가장큰값찾기

function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1; // 인덱스잡기

    while (left < right) {
      const sum = nums[left] + nums[i] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        // 더작다면 바꾸기
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}

/**
 * url:
 *
 * ✅ good:
 * - 투포인터를 사용하여 while 루프 기반으로 문제 접근 시도함
 * - 반복문을 통한 조합 탐색 구조의 의도는 명확함

 * 🔧 bad:
 * - 초기 변수값 설정 (`Infinity`, `right = nums.length`) 등에서 범위 오류 발생 가능
 * - `sum` 계산 위치가 루프 외부로 고정되어 동적 업데이트 안됨
 * - `Math.abs(sum - target) < min` 조건의 비교 대상이 부정확함 (target과의 거리 비교 필요)
 * 📌 note:
 * - 가장 가까운 값을 구할 때는 `Math.abs(sum - target)` 기준으로 최소값을 비교해야 함
 */
