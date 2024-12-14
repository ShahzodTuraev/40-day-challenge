// 2762. Continuous Subarrays
function continuousSubarrays(nums: number[]): number {
  let count: number = 0;
  let start: number = 0;
  const n: number = nums.length;
  const windowElements: Set<number> = new Set();
  const windowCounts: Map<number, number> = new Map();
  for (let end = 0; end < n; ++end) {
    let element = nums[end];
    windowCounts.set(element, (windowCounts.get(element) || 0) + 1);
    windowElements.add(element);
    while (Math.max(...windowElements) - Math.min(...windowElements) > 2) {
      let startElement: number = nums[start];
      let elementCount: number = windowCounts.get(startElement) || 0;
      if (elementCount === 1) {
        windowElements.delete(startElement);
      }
      windowCounts.set(startElement, elementCount - 1);
      start++;
    }
    count += end - start + 1;
  }

  return count;
}
