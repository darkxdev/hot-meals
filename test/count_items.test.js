import countItems from '../src/modules/countItems.js';

describe('test for counting the number of items', () => {
  test('should expect array length to be equal to the number of items', () => {
    expect(countItems([0, 1])).toBe(2);
  });
});