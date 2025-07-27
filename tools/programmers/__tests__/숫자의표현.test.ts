import { numberExpress } from '../ETC/숫자의표현';

describe('숫자의 표현', () => {
  test('1을 연속한 자연수로 표현할 수 있는 경우의 수', () => {
    const input = 1; // 1은 1로 표현할 수 있다.
    const output = numberExpress(input);
    expect(output).toBe(1);
  });
});
