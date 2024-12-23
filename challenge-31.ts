// 3232. Find if Digit Game Can Be Won
function canAliceWin(nums) {
  let oneDigitSum = 0;
  let oneDigitRemain = 0;
  let doubleDigitSum = 0;
  let doubleDigitRemain = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      oneDigitSum += nums[i];
      doubleDigitRemain += nums[i];
    }
    if (nums[i] > 9 && nums[i] < 100) {
      doubleDigitSum += nums[i];
      oneDigitRemain += nums[i];
    }
    if (nums[i] > 99) {
      doubleDigitRemain += nums[i];
      oneDigitRemain += nums[i];
    }
  }
  return oneDigitSum > oneDigitRemain || doubleDigitSum > doubleDigitRemain;
}
console.log(canAliceWin([1, 2, 3, 4, 5, 15]));
