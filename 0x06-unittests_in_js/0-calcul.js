function calculateNumber(a, b) {
  // Round both numbers using Math.round()
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
