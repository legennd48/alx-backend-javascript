export default function cleanSet(set, startString) {
  const resultParts = [];
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const item of set.values()) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const trimmedValue = item.substring(startString.length);

      if (trimmedValue && trimmedValue !== item) {
        resultParts.push(trimmedValue);
      }
    }
  }
  return resultParts.join('-');
}
