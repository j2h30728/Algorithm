const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(a) {
  return a
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(solution(input));
