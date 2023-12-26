const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...b] = input;

const dfs = (graph, n, m, x, y) => {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

  if (graph[x][y] === 1) {
    graph[x][y] = -1;

    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    dfs(graph, n, m, x, y - 1);
    return true;
  }
  return false;
};

function solution(n, arr) {
  let line = 0;
  const result = [];
  while (n--) {
    let count = 0;
    const [m, n, k] = arr[line].split(" ").map(Number);
    const graph = [];
    for (let i = 0; i < n; i++) {
      graph[i] = new Array(m);
    }

    for (let i = 1; i <= k; i++) {
      const [y, x] = arr[line + i].split(" ").map(Number);
      graph[x][y] = 1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (dfs(graph, n, m, i, j)) count++;
      }
    }
    line += k + 1;
    result.push(count);
  }
  return result.join("\n");
}

console.log(solution(Number(a), b));
