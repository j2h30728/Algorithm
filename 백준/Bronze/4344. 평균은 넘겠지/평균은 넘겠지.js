const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;

function solution(a, b) {
  const result = [];
  b.forEach((x) => {
    const [n, ...scores] = x.map(Number);
    const average = scores.reduce((acc, cur) => acc + cur, 0) / n;
    let count = 0;
    scores.forEach((score) => {
      if (score > average) {
        count++;
      }
    });
    result.push(((count / n) * 100).toFixed(3) + "%");
  });
  return result.join("\n");
}

console.log(
  solution(
    parseInt(n),
    arr.map((x) => x.split(" "))
  )
);
