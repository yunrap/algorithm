import { nextBigNumber } from '../ETC/다음큰숫자';
describe('숫자의 표현', () => {
  test('1을 연속한 자연수로 표현할 수 있는 경우의 수', () => {
    const output = nextBigNumber(78);
    expect(output).toBe(83);
  });
});
