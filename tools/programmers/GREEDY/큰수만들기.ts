function makeBigNumber(number: string, k: number) {
  let stack = [];

  for (const num of number) {
    while (k > 0 && num > stack[stack.length - 1] && stack.length > 0) {
      stack.pop();
      k--;
    }

    stack.push(num);
  }

  return stack.slice(0, stack.length - k).join('');
}

export default makeBigNumber;
