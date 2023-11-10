const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b, ...arr] = input;

const format = (str) => str.split(" ").map(Number);

function solution(n, m, arr) {
  const obj = {};
  const newArr = [0];
  let sum = 0;
  m.forEach((x, idx) => {
    sum += x;
    newArr.push(sum);
  });
  const result = [];
  arr.forEach(([start, end]) => {
    result.push(newArr[end] - newArr[start - 1]);
  });

  return result.join("\n");
}

console.log(solution(format(a), format(b), arr.map(format)));
