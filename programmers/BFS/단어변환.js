function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const queue = [[begin, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    if (current === target) {
      return count;
    }

    for (let word of words) {
      if (!visited.has(word) && isOneDiff(current, word)) {
        visited.add(word);
        queue.push([word, count + 1]);
      }
    }
  }

  return 0;
}

function isOneDiff(word1, word2) {
  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diff++;
    if (diff > 1) return false;
  }
  return diff === 1;
}
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
