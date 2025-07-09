// 맵에 저장.  숫자일시 그냥담고, 아닐시 문자열가면서 map.has(영단어)일시 key가져와서 result

const data = [
  ['zero', 0],
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
];

function solution(s) {
  var answer = 0;
  const map = new Map(data);
  let result = '';
  let temp = '';

  for (const v of s) {
    if (!isNaN(v)) {
      result += v;
      continue;
    }

    // 아닐시
    temp += v;
    if (map.has(temp)) {
      result += map.get(temp);
      temp = '';
    }
  }

  return Number(result);
}
