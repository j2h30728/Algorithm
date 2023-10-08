const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, x) {
  const num = n.split(" ")[1];
  return x
    .split(" ")
    .filter((x) => +x < +num)
    .join(" ");
}
console.log(solution(input[0], input[1]));
