const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());

function solution(string, number) {
  return string[number - 1];
}
console.log(solution(input[0], parseInt(input[1])));
