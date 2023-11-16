const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, arr] = input;

const format = (str) => str.split(" ").map(Number);

function solution(n, arr) {
  const set = Array.from(new Set(arr).values()).sort((a, b) => a - b);

  const map = new Map();
  set.forEach((value, index) => {
    map.set(value, index);
  });
  return arr.map((x) => map.get(x)).join(" ");
}

console.log(solution(Number(a), format(arr)));
