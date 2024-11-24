// 1975. Maximum Matrix Sum
function maxMatrixSum(matrix: number[][]): number {
  let negativeCnt = 0; // negative sonlarning yig'indisi
  let sum = 0; // matritsadagi absolut elementlar qiymati yig'indisi
  let minAbsValue = Infinity; // matritsadagi eng kichik element qiymatini ifodalaydi

  // matritsadagi har bir elementni tanlaydi
  for (const row of matrix) {
    for (const value of row) {
      sum += Math.abs(value); // Matritsadagi absolut qiymatlar yig'indisi
      minAbsValue = Math.min(minAbsValue, Math.abs(value));
      negativeCnt += value < 0 ? 1 : 0;
    }
  }
  if (negativeCnt % 2 == 0) {
    return sum;
  }
  return sum - minAbsValue * 2;
}
