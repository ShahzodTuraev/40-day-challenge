//2257. Count Unguarded Cells in the Grid
function countUnguarded(
  maxRows: number,
  maxCols: number,
  guards: number[][],
  walls: number[][]
): number {
  const grid: number[][] = Array.from({ length: maxRows }, () =>
    Array.from({ length: maxCols }, () => 0)
  );

  for (const [row, col] of guards) {
    grid[row][col] = 2;
  }

  for (const [row, col] of walls) {
    grid[row][col] = 2;
  }
  const directions: number[] = [-1, 0, 1, 0, -1];
  for (const [guardRow, guardCol] of guards) {
    for (let k = 0; k < 4; ++k) {
      let [x, y] = [guardRow, guardCol];
      let [deltaX, deltaY] = [directions[k], directions[k + 1]];
      while (
        x + deltaX >= 0 &&
        x + deltaX < maxRows &&
        y + deltaY >= 0 &&
        y + deltaY < maxCols &&
        grid[x + deltaX][y + deltaY] < 2
      ) {
        x += deltaX;
        y += deltaY;
        grid[x][y] = 1;
      }
    }
  }

  let unguardedCount = 0;
  for (const row of grid) {
    for (const cell of row) {
      if (cell === 0) {
        unguardedCount++;
      }
    }
  }

  return unguardedCount;
}
