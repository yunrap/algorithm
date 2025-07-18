function solution(operations) {
  var answer = [];
  let queue = [];

  for (const op of operations) {
    const [condition, num] = op.split(' ');

    if (condition === 'I') {
      // insert
      queue.push(Number(num));
    }

    if (condition === 'D' && num === '1') {
      // max delete
      const max = Math.max(...queue);
      queue = queue.filter((que) => que !== max);
    }

    if (condition === 'D' && num === '-1') {
      // min delete
      const min = Math.min(...queue);
      queue = queue.filter((que) => que !== min);
    }
  }

  if (!queue.length) {
    return [0, 0];
  }

  return [Math.max(...queue), Math.min(...queue)];
}
