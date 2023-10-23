const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));
const [arr1, arr2] = input;

function solution(a, b) {
  const [N, M] = a;
  b.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const newSum = b[i] + b[j] + b[k];
        if (newSum <= M && newSum > sum) {
          sum = newSum;
        }
      }
    }
  }

  return sum;
}
console.log(solution(arr1, arr2));
