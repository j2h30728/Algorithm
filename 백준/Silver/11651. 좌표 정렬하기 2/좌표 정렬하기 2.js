const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...arr] = input;

function solution(a, b) {
  b.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  return b.map((x) => x.join(" ")).join("\n");
}

console.log(
  solution(
    Number(a),
    arr.map((x) => x.split(" ").map(Number))
  )
);
