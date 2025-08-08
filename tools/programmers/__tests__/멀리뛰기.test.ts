import { longJump } from '../DP/멀리뛰기';

// Import the function to test
// Adjust the import path as needed based on your project structure

describe('longJump', () => {
  it('should return 5 for n = 4', () => {
    expect(longJump(4)).toBe(5);
  });

  it('should return 3 for n = 3', () => {
    expect(longJump(3)).toBe(3);
  });

  it('should return 21 for n = 7', () => {
    expect(longJump(7)).toBe(21);
  });
});
