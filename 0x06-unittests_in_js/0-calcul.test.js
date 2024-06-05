const assert = require('assert');
const calculateNumber = require('./0-calcul.js'); // Require the function

describe('calculateNumber function', () => {
  it('should add rounded values of two numbers', () => {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });

  it('should add rounded values with one decimal', () => {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });

  it('should add rounded values with both decimals', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });

  // Test case for rounding up due to decimal (edge case)
  it('should add rounded values with decimals causing rounding up', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
});
