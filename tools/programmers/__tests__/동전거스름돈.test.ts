import { getMinCoins } from '../GREEDY/동전거스름돈';

describe('getMinCoins', () => {
  test('returns correct min coins for typical case', () => {
    expect(getMinCoins(4200, [500, 100, 50, 10])).toBe(10);
  });

  test('returns 0 when amount is 0', () => {
    expect(getMinCoins(0, [100, 50, 10])).toBe(0);
  });

  test('returns correct min coins when only one coin type is available', () => {
    expect(getMinCoins(300, [100])).toBe(3);
  });
});
