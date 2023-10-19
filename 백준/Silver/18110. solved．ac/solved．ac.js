const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...arr] = input;

function solution(a, b) {
  if (a === 0) return 0;
  b.sort((a, b) => a - b);
  const except = Math.round(a * 0.15);
  const arr = b.slice(except, a - except);
  const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  return Math.round(average);
}

console.log(solution(Number(a), arr.map(Number)));
