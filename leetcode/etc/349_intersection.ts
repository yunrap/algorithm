// nums1 hash set 넣는다.
// nums2 배열 반복하면서 set에 있으면 temp 배열

function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1);
  const set2 = new Set(nums2);
  let temp: number[] = [];

  for (const num of set2.values()) {
    if (set.has(num)) {
      temp.push(num);
    }
  }
  return temp;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
