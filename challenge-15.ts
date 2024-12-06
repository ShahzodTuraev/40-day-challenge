// 2554. Maximum Number of Integers to Choose From a Range I
function maxCount(banned: number[], n: number, maxSum: number): number {
  let arr: number[] = [];
  let i: number = 1;
  let sum: number = 0;
  while (i <= n) {
    if (!banned.includes(i) && sum + i <= maxSum) {
      arr.push(i);
      sum += i;
    }
    i++;
  }
  return arr.length;
}
