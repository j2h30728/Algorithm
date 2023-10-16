const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0].trim();

function solution(n) {
  let count = 0;
  let num = 1;
  while (n >= Math.pow(5, num)) {
    count += Math.floor(n / Math.pow(5, num));
    num++;
  }
  return count;
}
console.log(solution(Number(input)));
