const assert = require('assert');
const calculateNumber = require('./1-calcul.js'); // Require the function

describe('calculateNumber function -SUM-', () => {
  it('should add rounded values of two numbers', () => {
    const result = calculateNumber('SUM', 1, 3);
    assert.strictEqual(result, 4);
  });

  it('should add rounded values with one decimal', () => {
    const result = calculateNumber('SUM', 1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should add rounded values with both decimals', () => {
    const result = calculateNumber('SUM', 1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  // Test case for rounding up due to decimal (edge case)
  it('should add rounded values with decimals causing rounding up', () => {
    const result = calculateNumber('SUM', 1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  // Test case for rounding down due to decimal
  it('should add rounded values with decimals causing rounding down', () => {
    const result = calculateNumber('SUM', 1.3, 4.2);
    assert.strictEqual(result, 5);
  });

  // Test case for rounding numbers with trailing 9s
  it('should add rounded values of decimals with trailing 9s', () => {
    const result = calculateNumber('SUM', 1.3999, 4.2999);
    assert.strictEqual(result, 5);
  });
});

describe('calculateNumber function -SUBTRACT-', () => {
  it('should subtract rounded values of two numbers', () => {
    const result = calculateNumber('SUBTRACT', 3, 1);
    assert.strictEqual(result, 2);
  });

  it('should subtract rounded values with one decimal', () => {
    const result = calculateNumber('SUBTRACT', 3.7, 1);
    assert.strictEqual(result, 3);
  });

  it('should subtract rounded values with both decimals', () => {
    const result = calculateNumber('SUBTRACT', 3.7, 1.2);
    assert.strictEqual(result, 3);
  });

  // Test case for rounding up due to decimal (edge case)
  it('should subtract rounded values with decimals causing rounding up', () => {
    const result = calculateNumber('SUBTRACT', 3.7, 1.5);
    assert.strictEqual(result, 2);
  });

  // Test case for rounding down due to decimal
  it('should subtract rounded values with decimals causing rounding down', () => {
    const result = calculateNumber('SUBTRACT', 4.2, 1.3);
    assert.strictEqual(result, 3);
  });

  // Test case for rounding numbers with trailing 9s
  it('should subtract rounded values of decimals with trailing 9s', () => {
    const result = calculateNumber('SUBTRACT', 4.2999, 1.3999);
    assert.strictEqual(result, 3);
  });

  // Test care for expected negative result
  it('should subtract and return negative result', () => {
    const result = calculateNumber('SUBTRACT', 1.59, 3.28);
    assert.strictEqual(result, -1);
  });
});

describe('calculateNumber function -DIVIDE-', () => {
  it('should add rounded values of two numbers', () => {
    const result = calculateNumber('DIVIDE', 1, 4);
    assert.strictEqual(result, 0.25);
  });

  it('should divide rounded values with one decimal', () => {
    const result = calculateNumber('DIVIDE', 1, 1.5);
    assert.strictEqual(result, 0.5);
  });

  it('should divide rounded values with both decimals', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.strictEqual(result, 0.2);
  });

  // Test case for rounding up due to decimal (edge case)
  it('should divide rounded equal values with decimals resulting in 1', () => {
    const result = calculateNumber('DIVIDE', 1.5, 1.5);
    assert.strictEqual(result, 1);
  });

  // Test case for dividing by 0
  it('should throw an error when dividing by 0', () => {
      const result = calculateNumber('DIVIDE', 1.3, 0);
      assert.strictEqual(result, 'Error')
  });

  //Test for wrong operation
  it('should return 0 if wrong operation is given', () => {
    const result = calculateNumber('Mod', 2, 3);
    assert.strictEqual(result, 0);
  });
});
