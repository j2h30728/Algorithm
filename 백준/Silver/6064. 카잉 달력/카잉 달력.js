const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...b] = input;

function solution(n, arr) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const [M, N, m, n] = arr[i];
    let x = m;
    let k = -1;

    while (x <= M * N) {
      if ((x - n) % N === 0) {
        k = x;
        break;
      }
      x += M;
    }
    result.push(k);
  }
  return result.join("\n");
}

console.log(
  solution(
    a,
    b.map((x) => x.split(" ")).map((x) => x.map(Number))
  )
);
