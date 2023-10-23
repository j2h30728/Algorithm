const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [number, ...arr] = input;

function solution(a, b) {
  b.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  return b.map((x) => x.join(" ")).join("\n");
}
console.log(
  solution(
    Number(number),
    arr.map((x) => x.split(" ").map(Number))
  )
);
