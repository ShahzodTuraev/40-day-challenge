// 2924. Find Champion II
function findChampion(n: number, edges: number[][]): number {
  const indegrees: number[] = Array(n).fill(0);
  for (const [, destination] of edges) {
    ++indegrees[destination];
  }
  let answer: number = -1;
  let zeroIndegreeCount: number = 0;
  for (let i = 0; i < n; ++i) {
    if (indegrees[i] === 0) {
      ++zeroIndegreeCount;
      answer = i;
    }
  }
  return zeroIndegreeCount === 1 ? answer : -1;
}
