// left:시작포인터 right:배열갯수-1 종료포인터
// 합 > target right --  아니면 left --
// 같으면 return

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];

    sum > target ? right-- : left++;
  }
  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
