const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;

function solution(a, b) {
  const result = [];
  b.forEach(([a, b]) => result.push(Number(a) + Number(b)));
  return result.join("\n");
}

console.log(
  solution(
    parseInt(n),
    arr.map((x) => x.split(" "))
  )
);
