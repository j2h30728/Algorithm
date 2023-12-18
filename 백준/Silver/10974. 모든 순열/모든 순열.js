const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0].split(" ");

function solution(a) {
  const arr = Array.from({ length: a }, (_, i) => i + 1);
  const visited = Array.from({ length: a }, () => false);
  const selected = [];
  const result = [];
  function dfs(arr, depth) {
    if (depth === a) {
      result.push(selected.map((x) => arr[x]).join(" "));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }
  dfs(arr, 0);
  return result.join("\n");
}

console.log(solution(Number(input)));
