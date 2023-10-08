const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

function solution(input) {
  const set = new Set();
  for (const num of input) {
    set.add(num % 42);
  }
  return set.size;
}
console.log(solution(input));
