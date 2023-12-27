const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input[0].split(" ");

function solution(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let index = 0;
  const result = [];

  while (arr.length > 0) {
    index = (index + k - 1) % arr.length;
    result.push(arr.splice(index, 1)[0]);
  }

  return `<${result.join(", ")}>`;
}

console.log(solution(Number(a), Number(b)));
