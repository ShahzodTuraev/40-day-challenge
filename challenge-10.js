// 3243. Shortest Distance After Road Addition Queries I
var shortestDistanceAfterQueries = function (n, queries) {
  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n - 1; ++i) {
    graph[i].push(i + 1);
  }

  const breadthFirstSearch = (startCity) => {
    const queue = [startCity];
    const visited = Array(n).fill(false);
    visited[startCity] = true;

    for (let pathLength = 0; ; ++pathLength) {
      const nextLevelQueue = [];

      for (const currentCity of queue) {
        if (currentCity === n - 1) {
          return pathLength;
        }

        for (const neighborCity of graph[currentCity]) {
          if (!visited[neighborCity]) {
            visited[neighborCity] = true;
            nextLevelQueue.push(neighborCity);
          }
        }
      }

      queue.splice(0, queue.length, ...nextLevelQueue);
    }
  };

  const shortestPathLengths = [];
  for (const [sourceCity, destinationCity] of queries) {
    graph[sourceCity].push(destinationCity);
    shortestPathLengths.push(breadthFirstSearch(0));
  }

  return shortestPathLengths;
};
