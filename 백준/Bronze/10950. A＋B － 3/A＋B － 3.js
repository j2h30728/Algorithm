const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((x) => x.split(" ").map((x) => parseInt(x)));

function solution(input) {
  const result = [];
  for (const [a, b] of input) {
    result.push(a + b);
  }
  return result.join("\n");
}
console.log(solution(input));
