function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  let count = 1;
  let current = days[0];
  for (let i = 1; i < days.length; i++) {
    if (current >= days[i]) {
      count++;
    } else {
      answer.push(count);
      current = days[i];
      count = 1;
    }
  }

  answer.push(count);
  return answer;
}
