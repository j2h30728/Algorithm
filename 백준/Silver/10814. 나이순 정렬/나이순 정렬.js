const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [num, ...arr] = input;

function solution(a, b) {
  b.sort((a, b) => a[0] - b[0]);
  return b.map((x) => x.join(" ")).join("\n");
}
console.log(
  solution(
    Number(num),
    arr.map((x) => x.split(" "))
  )
);
