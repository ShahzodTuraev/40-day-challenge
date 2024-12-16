// 3264. Final Array State After K Multiplication Operations I
function getFinalState(
  nums: number[],
  k: number,
  multiplier: number
): number[] {
  let numsArr: number[] = [...nums];
  for (let i: number = 0; i < k; i++) {
    const minNum: number = Math.min(...numsArr);
    numsArr[numsArr.indexOf(minNum)] = minNum * multiplier;
  }
  return numsArr;
}
