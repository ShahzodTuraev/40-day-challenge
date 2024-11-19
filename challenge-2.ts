//2461. Maximum Sum of Distinct Subarrays With Length K
//Ushbu masalada bizga sonlardan iborat array va k soni berilgan. Array ichidagi k ta elementdan
// iborat subarray hosil qilamiz. Ushbu subarraylardan elementlari yig'indisi eng katta bo'lganini
// chiqarish kerak. Subarraylar turli xil elementlardan iborat bo'lishi kerak.

// 1-YECHIM:
// bu yechimni shartlar qo'yish, for loop, va array metodlari orqali ishladim.
function maximumSubarraySum(nums: number[], k: number): number {
  let maxSum: number = 0;
  for (let i: number = 0; i < nums.length - k + 1; i++) {
    const allSubarray: number[] = nums.slice(i, i + k);
    if (allSubarray.length == [...new Set(allSubarray)].length) {
      if (nums.slice(i, i + k).reduce((a: any, b: any) => a + b, 0) > maxSum) {
        maxSum = nums.slice(i, i + k).reduce((a: any, b: any) => a + b, 0);
      }
    }
  }

  return maxSum;
}
// Modul to'g'ri ishladi
//lekin ko'pxonali va uzunligi uzun arraylar kiritilganda vaqt juda ham ko'p ketganligi uchun
// "Submit" bo'lmadi.
//izlab boshqa yechim topdim va o'rganib chiqdim.
// console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));

// 2-YECHIM:
// yechim manbaasi: https://algo.monster/liteproblems/2461

function maximumSubarraySum2(nums: number[], k: number): number {
  const n: number = nums.length;
  const countMap: Map<number, number> = new Map(); //new Map()-(key, value) objectlarni hosil
  //qilishda ishlatiladi. Key, value data ustida ishlashni qulaylashtiradi.
  let currentSum: number = 0;

  // Initialize the count map and current sum with the first 'k' elements
  for (let i: number = 0; i < k; ++i) {
    countMap.set(nums[i], (countMap.get(nums[i]) ?? 0) + 1);
    currentSum += nums[i];
  }

  // Check if the first subarray of length 'k' has 'k' distinct numbers
  let maxSum: number = countMap.size === k ? currentSum : 0;

  // Traverse the array starting from the 'k'th element
  for (let i: number = k; i < n; ++i) {
    // Add the next number to the count map and current sum
    countMap.set(nums[i], (countMap.get(nums[i]) ?? 0) + 1);
    currentSum += nums[i];

    // Update the count map and current sum by removing the (i-k)'th number
    const prevCount: number = countMap.get(nums[i - k])! - 1;
    countMap.set(nums[i - k], prevCount);
    currentSum -= nums[i - k];

    // If after decrementing, the count is zero, remove it from the map
    if (prevCount === 0) {
      countMap.delete(nums[i - k]);
    }

    // If the current subarray has 'k' distinct elements, update maxSum
    if (countMap.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  // Return the maximum sum of a subarray with 'k' distinct numbers
  return maxSum;
}
