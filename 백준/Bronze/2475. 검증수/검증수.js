const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")[0]
  .trim()
  .split("")
  .map((x) => +x);

function solution(input) {
  const result = input.reduce((acc, curr) => acc + curr ** 2, 0);
  console.log(result % 10);
}
solution(input);
