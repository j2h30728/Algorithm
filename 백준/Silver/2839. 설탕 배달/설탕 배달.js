const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(a) {
  let count = 0;
  while (a > 0) {
    if (a % 5 === 0) {
      a = parseInt(a / 5);
      count += a;
      break;
    } else {
      a -= 3;
      count += 1;
    }
  }

  return a >= 0 ? count : -1;
}

console.log(solution(Number(input)));
