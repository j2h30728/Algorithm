const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(a) {
  let count = 1;
  let number = 666;
  while (count < a) {
    number++;
    if (number.toString().includes("666")) {
      count++;
    }
  }
  return number;
}

console.log(solution(Number(input)));
