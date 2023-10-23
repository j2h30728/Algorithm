const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((x) => parseInt(x));

function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr.join("\n");
}
console.log(solution(input));
