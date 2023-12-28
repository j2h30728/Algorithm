const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(n) {
  let num = Math.floor(n / 2);
  let sum;
  while (num < n) {
    let answer = num;
    sum = num;
    while (answer > 0) {
      sum += answer % 10;
      answer = Math.floor(answer / 10);
    }
    if (sum === n) {
      return num;
    }
    num++;
  }
  return 0;
}

console.log(solution(Number(input)));
