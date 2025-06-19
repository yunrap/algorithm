function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = [];

  let currPop = 0;

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack.length > 0 && popped[currPop] === stack[stack.length - 1]) {
      stack.pop();
      currPop++;
    }
  }

  return stack.length === 0;
}

/**
 * url:
 *
 * ✅ good:
 * - stack 배열로 stack 관리
 *
 * 🔧 bad:
 * - 재풀이필요
 */
