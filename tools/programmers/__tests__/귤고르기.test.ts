import { orange } from '../HASH/귤고르기';

describe('orange', () => {
  it('returns the minimum number of tangerine sizes needed to pick k tangerines', () => {
    expect(orange(6, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(3);
    expect(orange(4, [1, 1, 1, 1, 2, 2, 3, 3])).toBe(1);
    expect(orange(2, [1, 2, 2, 3, 3, 3])).toBe(1);
    expect(orange(5, [1, 2, 2, 3, 3, 3])).toBe(2);
    expect(orange(1, [1, 2, 3])).toBe(1);
  });

  it('returns 0 if k is greater than total tangerines', () => {
    expect(orange(100, [1, 2, 2, 3, 3, 3])).toBe(0);
  });

  it('returns 0 if tangerine array is empty', () => {
    expect(orange(1, [])).toBe(0);
  });

  it('returns 0 if k is 0', () => {
    expect(orange(1, [1, 2, 2, 3, 3, 3])).toBe(1);
  });
});
