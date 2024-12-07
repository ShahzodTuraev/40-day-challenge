// 1760. Minimum Limit of Balls in a Bag
function minimumSize(nums: number[], maxOperations: number): number {
  let left = 1;
  let right = Math.max(...nums);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let operationsCount = 0;

    for (const ballSize of nums) {
      operationsCount += Math.floor((ballSize - 1) / mid);
    }

    if (operationsCount <= maxOperations) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
