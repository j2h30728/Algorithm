const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, b] = input[0].split(" ");

const factorial = (num) => {
  if (num == 1 || num == 0) return 1;
  return num * factorial(num - 1);
};

function solution(n, k) {
  const N = factorial(n);
  const K = factorial(k);
  const N_K = factorial(n - k);

  return N / (K * N_K);
}

console.log(solution(Number(a), Number(b)));
