const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[1];

function solution(input) {
  return input.split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
console.log(solution(input));
