import { clothesFn } from '../HASH/의상';

// Import the solution function

describe('solution', () => {
  it('5반환', () => {
    const clothes = [
      ['yellow_hat', 'headgear'],
      ['blue_sunglasses', 'eyewear'],
      ['green_turban', 'headgear'],
    ];
    expect(clothesFn(clothes)).toBe(5);
  });

  it('3가지를반환', () => {
    const clothes = [
      ['red_hat', 'headgear'],
      ['black_glasses', 'eyewear'],
    ];
    expect(clothesFn(clothes)).toBe(3);
  });

  it('아무것도옷이없다면', () => {
    expect(clothesFn([])).toBe(0);
  });

  it('1가지를반환', () => {
    const clothes = [['white_shirt', 'top']];
    expect(clothesFn(clothes)).toBe(1);
  });
});
