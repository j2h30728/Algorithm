const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

function solution(a, b) {
  const result = [];
  const set = new Set();
  a.forEach((x) => set.add(x));
  b.forEach((x) => (set.has(x) ? result.push(1) : result.push(0)));
  return result.join("\n");
}
console.log(solution(input[1], input[3]));
