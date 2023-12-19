const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...b] = input;

function solution(n, arr) {
  arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let count = 1;
  let cur = 0;
  for (let i = 1; i < n; i++) {
    if (arr[cur][1] <= arr[i][0]) {
      cur = i;
      count++;
    }
  }

  return count;
}

console.log(
  solution(
    Number(a),
    b.map((x) => x.split(" ").map(Number))
  )
);
