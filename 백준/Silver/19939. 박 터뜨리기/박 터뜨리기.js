const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

const [N, M] = input.split(" ").map(Number);

function solution(n, m) {
  let sum = 0;
  for (let i = 1; i <= m; i++) {
    sum += i;
  }
  if (sum > n) {
    return -1;
  }
  n -= sum;
  if (n % m === 0) return m - 1;
  else return m;
}

console.log(solution(N, M));
