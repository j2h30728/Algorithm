const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, price] = input;

function solution(x, y, z) {
  const money = [];
  let min = 999;
  for (let i = 0; i < x - 1; i++) {
    min = Math.min(z[i], min);
    money.push(min);
  }
  const result = y.reduce((acc, cur, index) => acc + cur * money[index], 0);

  return result;
}

console.log(solution(Number(M), N.split(" ").map(Number), price.split(" ").map(Number)));
