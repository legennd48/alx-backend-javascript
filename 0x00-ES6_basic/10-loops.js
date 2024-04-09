export default function appendToEachArrayValue(array, appendString) {
  const freshArray = [];
  for (const idx of array) {
    freshArray.push(appendString + idx);
  }

  return freshArray;
}
