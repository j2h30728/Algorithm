const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N, price] = input;

function solution(x, dist, cost) {
  let minCost = cost[0];
  for (let i = 0; i < x; i++) {
    minCost = Math.min(cost[i], minCost);
    cost[i] = minCost;
  }
  let result = BigInt(0);
  for (let i = 0; i < x - 1; i++) {
    result += BigInt(dist[i]) * BigInt(cost[i]);
  }

  return String(result);
}

console.log(solution(Number(M), N.split(" ").map(Number), price.split(" ").map(Number)));
