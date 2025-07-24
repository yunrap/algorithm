function solution(s) {
  var answer = '';

  const data = s.split(' ');
  let index = 0;

  for (const dt of data) {
    for (let i = 0; i < dt.length; i++) {
      if (!isNaN(dt[i])) {
        answer += dt[i];
        continue;
      }
      i === 0 ? (answer += dt[i].toUpperCase()) : (answer += dt[i].toLowerCase());
    }
    if (data.length - 1 !== index) answer += ' ';
    index++;
  }

  return answer;
}
console.log(solution('3people unFollowed me')); // "3People Unfollowed Me"
console.log(solution('for the last week')); // "For The Last Week"
