const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(a) {
  const obj = {};
  obj[1] = 0;
  for (let i = 2; i <= a; i++) {
    obj[i] = obj[i - 1] + 1;
    if (i % 2 === 0) {
      obj[i] = Math.min(obj[i], obj[i / 2] + 1);
    }
    if (i % 3 === 0) {
      obj[i] = Math.min(obj[i], obj[i / 3] + 1);
    }
  }
  return obj[a];
}
console.log(solution(Number(input)));
