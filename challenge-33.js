// 1295. Find Numbers with Even Number of Digits
function findNumbers(nums: number[]): number {
  return nums.filter((ele) => ele.toString().length % 2 == 0).length;
}
