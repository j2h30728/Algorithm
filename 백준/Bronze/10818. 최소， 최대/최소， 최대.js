const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)[0]
  .split(" ")
  .map((x) => parseInt(x));

function solution(input) {
  return [Math.min(...input), Math.max(...input)].join(" ");
}
console.log(solution(input));
