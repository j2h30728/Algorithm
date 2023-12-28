const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(n) {
  let x = 1;
  let count = 1;
  while (x < n) {
    x += 6 * count;
    count++;
  }
  return count;
}

console.log(solution(Number(input)));
