// 3289. The Two Sneaky Numbers of Digitville
function getSneakyNumbers(nums: number[]): number[] {
  return nums.filter((ele, index) => nums.indexOf(ele) !== index);
}
