import { groupAnagrams } from '../../leetcode/etc/49_anergram';

describe('groupAnagrams', () => {
  test('애너그램 그룹이 올바르게 묶이는지 확인', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = groupAnagrams(input);

    expect(output).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(['bat']),
        expect.arrayContaining(['nat', 'tan']),
        expect.arrayContaining(['ate', 'eat', 'tea']),
      ])
    );
  });

  test('빈문자열일때', () => {
    const input = [''];
    const output = groupAnagrams(input);
    expect(output).toEqual([['']]);
  });

  test('한문자일때', () => {
    const input = ['a'];
    const output = groupAnagrams(input);
    expect(output).toEqual([['a']]);
  });
});
