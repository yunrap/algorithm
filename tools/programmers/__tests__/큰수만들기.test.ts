import makeBigNumber from '../GREEDY/큰수만들기';

describe('makeBigNumber', () => {
  test('returns the largest number after removing k digits', () => {
    expect(makeBigNumber('1924', 2)).toBe('94');
    expect(makeBigNumber('1231234', 3)).toBe('3234');
    expect(makeBigNumber('4177252841', 4)).toBe('775841');
    expect(makeBigNumber('987654321', 5)).toBe('9876');
    expect(makeBigNumber('10000', 2)).toBe('100');
  });

  test('removing all digits except one', () => {
    expect(makeBigNumber('54321', 4)).toBe('5');
    expect(makeBigNumber('12345', 4)).toBe('5');
  });

  test('no digits removed', () => {
    expect(makeBigNumber('12345', 0)).toBe('12345');
  });

  test('all digits are the same', () => {
    expect(makeBigNumber('11111', 2)).toBe('111');
  });

  test('edge case: k equals number.length', () => {
    expect(makeBigNumber('12345', 5)).toBe('');
  });
});
