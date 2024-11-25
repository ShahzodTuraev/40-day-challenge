// 773. Sliding Puzzle
const slidingPuzzle = function (board) {
  let m = 2,
    n = 3;

  let sb = "";
  let target = "123450";
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sb += board[i][j];
    }
  }
  let start = sb;

  let neighbor = [
    [1, 3],
    [0, 4, 2],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2],
  ];

  let q = [start];
  let visited = new Set();

  let step = 0;
  while (q.length) {
    let sz = q.length;
    for (let i = 0; i < sz; i++) {
      let cur = q.shift();
      if (target === cur) {
        return step;
      }
      let idx = 0;
      while (cur[idx] !== "0") {
        idx++;
      }
      for (let adj of neighbor[idx]) {
        let new_board = swap(cur, adj, idx);
        if (!visited.has(new_board)) {
          q.push(new_board);
          visited.add(new_board);
        }
      }
    }
    step++;
  }

  return -1;
};

function swap(s, i, j) {
  let chars = s.split("");
  [chars[i], chars[j]] = [chars[j], chars[i]];
  return chars.join("");
}
