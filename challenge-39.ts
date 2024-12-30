// 1492. The kth Factor of n
function kthFactor(n: number, k: number): number {
  let i: number = 1;
  let deviders: number[] = [];
  while (i <= n && deviders.length <= k) {
    if (n % i == 0) {
      deviders.push(i);
    }
    i++;
  }
  if (deviders.length >= k) {
    return deviders[k - 1];
  } else {
    return -1;
  }
}
