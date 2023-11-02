const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n) {
  const obj = {};
  obj[1] = 1;
  obj[2] = 2;
  for (let i = 3; i <= n; i++) {
    if (!obj[i]) {
      obj[i] = (obj[i - 1] + obj[i - 2]) % 10007;
    }
  }
  return obj[n];
}

console.log(solution(Number(input)));
