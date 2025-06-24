/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height: Array<number>) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  let area = 0;

  while (left < right) {
    const width = right - left; // 거리

    area = width * Math.min(height[left], height[right]);
    maxArea = Math.max(area, maxArea);

    if (height[left] < height[right]) {
      // 더 낮은 벽을 이동해야 더큰 면적기대
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
