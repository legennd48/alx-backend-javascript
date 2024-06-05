const assert = require('assert');
const calculateNumber = require('./0-calcul.js'); // Require the function

describe('calculateNumber function', () => {
  it('should add rounded values of two numbers', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should add rounded values with one decimal', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should add rounded values with both decimals', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  // Test case for rounding up due to decimal (edge case)
  it('should add rounded values with decimals causing rounding up', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  // Test case for rounding down due to decimal
  it('should add rounded values with decimals causing rounding down', () => {
    const result = calculateNumber(1.3, 4.2);
    assert.strictEqual(result, 5);
  });

  // Test case for rounding numbers with trailing 9s
  it('should add rounded values of decimals with trailing 9s', () => {
    const result = calculateNumber(1.3999, 4.2999);
    assert.strictEqual(result, 5);
  });
});
