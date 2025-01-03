// 1072. Flip Columns For Maximum Number of Equal Rows
function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const countMap = new Map<string, number>();
  let maxEqualRows = 0;

  for (const row of matrix) {
    if (row[0] === 1) {
      for (let i = 0; i < row.length; i++) {
        row[i] ^= 1;
      }
    }
    const rowString = row.join("");
    countMap.set(rowString, (countMap.get(rowString) || 0) + 1);
    maxEqualRows = Math.max(maxEqualRows, countMap.get(rowString)!);
  }

  return maxEqualRows;
}
