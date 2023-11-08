const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(a) {
  const obj = {};
  obj[1] = 1;
  obj[2] = 3;
  for (let i = 3; i <= a; i++) {
    if (!obj[i]) {
      obj[i] = (obj[i - 1] + obj[i - 2] * 2) % 10007;
    }
  }
  return obj[a];
}

console.log(solution(Number(input)));
