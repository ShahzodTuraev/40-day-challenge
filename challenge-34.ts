// 806.Number of Lines To Write String
function numberOfLines(widths: number[], s: string): number[] {
  const letters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let simpleLine: number = 0;
  let lineLength: number = 1;
  for (let i: number = 0; i < s.length; i++) {
    const currentPixel = widths[letters.indexOf(s[i])];
    if (simpleLine + currentPixel <= 100) {
      simpleLine += currentPixel;
    } else {
      simpleLine = currentPixel;
      lineLength += 1;
    }
  }
  return [lineLength, simpleLine];
}
