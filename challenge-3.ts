// 2516. Take K of Each Character From Left and Right
/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
function takeCharacters(str: string, k: number): number {
  const getIndex = (char: string) => char.charCodeAt(0) - "a".charCodeAt(0);
  const frequencyCount = [0, 0, 0];
  for (const char of str) {
    frequencyCount[getIndex(char)]++;
  }
  if (frequencyCount.some((value) => value < k)) {
    return -1;
  }
  const stringLength = str.length;
  let maxSubstringLength = 0;
  for (let i = 0, j = 0; j < stringLength; j++) {
    frequencyCount[getIndex(str[j])]--;
    while (frequencyCount[getIndex(str[j])] < k) {
      frequencyCount[getIndex(str[i])]++;
      i++;
    }
    maxSubstringLength = Math.max(maxSubstringLength, j - i + 1);
  }
  return stringLength - maxSubstringLength;
}
