const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const format = (arr) => arr.split(" ").map(Number);

function solution(a, b, c, d) {
  const map = new Map();
  b.forEach((x) => map.set(x, (map.get(x) || 0) + 1));

  return d.map((x) => map.get(x) || 0).join(" ");
}

console.log(solution(Number(input[0]), format(input[1]), Number(input[2]), format(input[3])));
