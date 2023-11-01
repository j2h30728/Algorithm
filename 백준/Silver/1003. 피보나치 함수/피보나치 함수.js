const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [num, ...arr] = input;

const obj = {};

const fibonacci = (n) => {
  if (n === 0) {
    return [1, 0];
  }
  if (n === 1) {
    return [0, 1];
  }
  if (!obj[n]) {
    const [a, b] = fibonacci(n - 1);
    const [c, d] = fibonacci(n - 2);
    obj[n] = [a + c, b + d];

    return obj[n];
  }
  return obj[n];
};

function solution(a, b) {
  const result = [];

  for (let i = 0; i < a; i++) {
    const num = b[i];
    result.push(fibonacci(num).join(" "));
  }
  return result.join("\n");
}
console.log(solution(num, arr.map(Number)));
