export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  inputMap.forEach((value, key) => {
    if (value === 1) {
      inputMap.set(key, 100);
    }
  });
}
