const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

function solution(a, b) {
  console.log(Number(a) - Number(b));
}
solution(input[0], input[1]);
