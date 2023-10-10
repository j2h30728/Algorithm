const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice();
const [number, arr] = input;

function solution(number, arr) {
  const max = Math.max(...arr);
  return arr.reduce((acc, cur) => acc + (cur / max) * 100, 0) / number;
}
console.log(
  solution(
    parseInt(number),
    arr.split(" ").map((x) => parseInt(x))
  )
);
