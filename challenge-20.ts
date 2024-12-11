// 2779. Maximum Beauty of an Array After Applying Operation
function maximumBeauty(nums: number[], operationsAllowed: number): number {
  const maxBoundary = Math.max(...nums) + operationsAllowed * 2 + 2;
  const differenceArray: number[] = new Array(maxBoundary).fill(0);

  for (const num of nums) {
    differenceArray[num]++;
    differenceArray[num + operationsAllowed * 2 + 1]--;
  }

  let maxBeauty = 0;
  let sum = 0;
  for (const frequency of differenceArray) {
    sum += frequency;
    maxBeauty = Math.max(maxBeauty, sum);
  }
  return maxBeauty;
}
