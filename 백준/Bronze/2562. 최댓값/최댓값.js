const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => Number(x));

function solution(input) {
  const max = Math.max(...input);
  console.log(max);
  console.log(input.indexOf(max) + 1);
}
solution(input);
