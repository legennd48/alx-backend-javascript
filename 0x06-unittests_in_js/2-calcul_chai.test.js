const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js'); // Require the function

describe('calculateNumber', () => {
  describe('calculateNumber function -SUM-', () => {
    it('should add rounded values of two numbers', () => {
      const result = calculateNumber('SUM', 1, 3);
      expect(result).to.equal(4);
    });

    it('should add rounded values with one decimal', () => {
      const result = calculateNumber('SUM', 1, 3.7);
      expect(result).to.equal(5);
    });

    it('should add rounded values with both decimals', () => {
      const result = calculateNumber('SUM', 1.2, 3.7);
      expect(result).to.equal(5);
    });

    // Test case for rounding up due to decimal (edge case)
    it('should add rounded values with decimals causing rounding up', () => {
      const result = calculateNumber('SUM', 1.5, 3.7);
      expect(result).to.equal(6);
    });

    // Test case for rounding down due to decimal
    it('should add rounded values with decimals causing rounding down', () => {
      const result = calculateNumber('SUM', 1.3, 4.2);
      expect(result).to.equal(5);
    });

    // Test case for rounding numbers with trailing 9s
    it('should add rounded values of decimals with trailing 9s', () => {
      const result = calculateNumber('SUM', 1.3999, 4.2999);
      expect(result).to.equal(5);
    });
  });

  describe('calculateNumber function -SUBTRACT-', () => {
    it('should subtract rounded values of two numbers', () => {
      const result = calculateNumber('SUBTRACT', 3, 1);
      expect(result).to.equal(2);
    });

    it('should subtract rounded values with one decimal', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 1);
      expect(result).to.equal(3);
    });

    it('should subtract rounded values with both decimals', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 1.2);
      expect(result).to.equal(3);
    });

    // Test case for rounding up due to decimal (edge case)
    it('should subtract rounded values with decimals causing rounding up', () => {
      const result = calculateNumber('SUBTRACT', 3.7, 1.5);
      expect(result).to.equal(2);
    });

    // Test case for rounding down due to decimal
    it('should subtract rounded values with decimals causing rounding down', () => {
      const result = calculateNumber('SUBTRACT', 4.2, 1.3);
      expect(result).to.equal(3);
    });

    // Test case for rounding numbers with trailing 9s
    it('should subtract rounded values of decimals with trailing 9s', () => {
      const result = calculateNumber('SUBTRACT', 4.2999, 1.3999);
      expect(result).to.equal(3);
    });

    // Test care for expected negative result
    it('should subtract and return negative result', () => {
      const result = calculateNumber('SUBTRACT', 1.59, 3.28);
      expect(result).to.equal(-1);
    });
  });

  describe('calculateNumber function -DIVIDE-', () => {
    it('should add rounded values of two numbers', () => {
      const result = calculateNumber('DIVIDE', 1, 4);
      expect(result).to.equal(0.25);
    });

    it('should divide rounded values with one decimal', () => {
      const result = calculateNumber('DIVIDE', 1, 1.5);
      expect(result).to.equal(0.5);
    });

    it('should divide rounded values with both decimals', () => {
      const result = calculateNumber('DIVIDE', 1.4, 4.5);
      expect(result).to.equal(0.2);
    });

    // Test case for rounding up due to decimal (edge case)
    it('should divide rounded equal values with decimals resulting in 1', () => {
      const result = calculateNumber('DIVIDE', 1.5, 1.5);
      expect(result).to.equal(1);
    });

    // Test case for dividing by 0
    it('should throw an error when dividing by 0', () => {
      const result = calculateNumber('DIVIDE', 1.3, 0);
      expect(result).to.equal('Error');
    });

    // Test for wrong operation
    it('should return 0 if wrong operation is given', () => {
      const result = calculateNumber('Mod', 2, 3);
      expect(result).to.equal(0);
    });
  });
});
