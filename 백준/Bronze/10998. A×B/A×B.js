const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((x) => parseInt(x));

function solution(a, b) {
  return a * b;
}
console.log(solution(input[0], input[1]));
