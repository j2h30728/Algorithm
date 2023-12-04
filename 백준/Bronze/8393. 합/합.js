const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(a) {
  return Array.from({ length: a }, (_, i) => i + 1).reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(parseInt(input)));
