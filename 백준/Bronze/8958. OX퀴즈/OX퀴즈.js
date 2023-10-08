const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x, idx) => (idx === 0 ? Number(x) : x));

function solution(input) {
  const arr = input.slice(1);
  const result = [];
  for (const str of arr) {
    const add = str
      .split("X")
      .filter((x) => x !== "")
      .reduce((acc, cur) => acc + Math.floor((cur.length * (1 + cur.length)) / 2), 0);
    result.push(add);
  }
  return result.join("\n");
}
console.log(solution(input));
