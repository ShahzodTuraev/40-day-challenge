// 3300. Minimum Element After Replacement With Digit Sum
function minElement(nums: number[]): number {
  let strNums: any[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] > 9) {
      strNums.push(nums[i].toString().split(""));
    } else {
      strNums.push(nums[i]);
    }
  }
  const result: number[] = strNums.map((ele: any) => {
    if (Number.isInteger(ele)) {
      return ele;
    } else {
      return ele
        .map((item: any) => Number(item))
        .reduce((a: any, b: any) => a + b, 0);
    }
  });
  return Math.min(...result);
}
