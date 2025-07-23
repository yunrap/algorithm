// stack 사용, 안에 있다면 push안함

function solution(arr) {
  const temp = [];
  for (const a of arr) {
    if (temp.length === 0) {
      temp.push(a);
      continue;
    }

    const compare = temp[temp.length - 1];
    if (compare === a) continue;

    temp.push(a);
  }
  return temp;
}
