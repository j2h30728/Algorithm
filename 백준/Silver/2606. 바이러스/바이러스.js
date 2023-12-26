const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = Number(input[0]); // 정점 갯수
const b = Number(input[1]); // 간선 갯수
const c = input.slice(2);
let count = 0;

const dfs = (graph, v, visited) => {
  visited[v] = true;
  count += 1;
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
};

function solution(n, m, arr) {
  const graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 0; i < m; i++) {
    const [x, y] = arr[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  const visited = new Array(n + 1).fill(false);
  dfs(graph, 1, visited);
  return count - 1;
}

console.log(solution(a, b, c));
