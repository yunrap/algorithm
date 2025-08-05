import { discountFn } from '../TWOPOINT/할인행사';

describe('solution', () => {
  it('returns correct count for basic example', () => {
    const want = ['banana', 'apple', 'rice', 'pork', 'pot'];
    const number = [3, 2, 2, 2, 1];
    const discounts = [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ];
    expect(discountFn(want, number, discounts)).toBe(3);
  });

  it('returns 0 when no matching window exists', () => {
    const want = ['apple'];
    const number = [10];
    const discounts = [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ];
    expect(discountFn(want, number, discounts)).toBe(0);
  });
});
