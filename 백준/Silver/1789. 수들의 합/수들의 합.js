const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(a) {
  let sum = 0;
  let number = 1;
  while (a > sum) {
    sum += number;
    if (a - sum >= number + 1) {
      number++;
    } else {
      break;
    }
  }
  return number;
}

console.log(solution(Number(input)));
