// 2577. Minimum Time to Visit a Cell In a Grid
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  if (grid[0][1] > 1 && grid[1][0] > 1) {
    return -1;
  }
  const m = grid.length;
  const n = grid[0].length;
  const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
  dist[0][0] = 0;

  const priorityQueue = new MinPriorityQueue({ priority: (item) => item[0] });
  priorityQueue.enqueue([0, 0, 0]);
  const directions = [-1, 0, 1, 0, -1];

  while (!priorityQueue.isEmpty()) {
    const [time, i, j] = priorityQueue.dequeue().element;
    if (i === m - 1 && j === n - 1) {
      return time;
    }
    for (let k = 0; k < 4; k++) {
      const nextX = i + directions[k];
      const nextY = j + directions[k + 1];
      if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
        let nextTime = time + 1;
        if (nextTime < grid[nextX][nextY]) {
          nextTime = grid[nextX][nextY] + ((grid[nextX][nextY] - nextTime) % 2);
        }
        if (nextTime < dist[nextX][nextY]) {
          dist[nextX][nextY] = nextTime;
          priorityQueue.enqueue([nextTime, nextX, nextY]);
        }
      }
    }
  }

  return -1;
};
