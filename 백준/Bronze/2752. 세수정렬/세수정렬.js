const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(arr) {
  return arr.sort((a, b) => a - b).join(" ");
}

console.log(solution(input.split(" ").map(Number)));
