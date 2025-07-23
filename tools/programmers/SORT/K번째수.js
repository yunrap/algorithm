function solution(array, commands) {
  var answer = [];

  for (const cm of commands) {
    const arr = [...array];
    const str = arr.slice(cm[0] - 1, cm[1]);
    str.sort((a, b) => a - b);
    answer.push(str[cm[2] - 1]);
  }
  return answer;
}
