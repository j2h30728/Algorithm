const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, numbers] = input.map((x) => x.split(" ").map(Number));

function solution(a, b) {
  return b.sort((a, b) => a - b)[a[1] - 1];
}

console.log(solution(n, numbers));
