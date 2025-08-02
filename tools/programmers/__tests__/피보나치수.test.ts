import { fibonachi } from '../DP/피보나치수';

describe('피보나치 수', () => {
  test('n이 3일 때', () => {
    const input = 3;
    const output = fibonachi(input);
    expect(output).toBe(2);
  });

  test('n이 4일 때', () => {
    const input = 4;
    const output = fibonachi(input);
    expect(output).toBe(3);
  });

  test('n이 100,000일 때', () => {
    const input = 100000;
    const output = fibonachi(input);
    expect(output).toBe(1168141);
  });
});
