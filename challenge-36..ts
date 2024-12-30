// 2053. Kth Distinct String in an Array
function kthDistinct(arr: string[], k: number): string {
  let distinctItems: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr.filter((ele) => ele == arr[i]).length === 1) {
      distinctItems.push(arr[i]);
    }
  }
  return distinctItems.length >= k ? distinctItems[k - 1] : "";
}
