// 2182. Construct String With Repeat Limit
function repeatLimitedString(s: string, repeatLimit: number): string {
  const charCounts: number[] = new Array(26).fill(0);
  for (const ch of s) {
    charCounts[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let result: string = "";

  for (let i = 25; i >= 0; --i) {
    let nextCharIndex = i - 1;

    while (true) {
      const repeatCount = Math.min(charCounts[i], repeatLimit);
      for (let k = repeatCount; k > 0; --k) {
        charCounts[i]--;
        result += String.fromCharCode("a".charCodeAt(0) + i);
      }
      if (charCounts[i] === 0) break;

      while (nextCharIndex >= 0 && charCounts[nextCharIndex] === 0) {
        --nextCharIndex;
      }
      if (nextCharIndex < 0) break;
      charCounts[nextCharIndex]--;
      result += String.fromCharCode("a".charCodeAt(0) + nextCharIndex);
    }
  }

  return result;
}
