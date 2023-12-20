const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, arr) {
  const arrow = new Array(1000001).fill(0);
  let count = 0;

  for (const height of arr) {
    if (arrow[height] > 0) {
      arrow[height] -= 1;
      arrow[height - 1] += 1;
    } else {
      arrow[height - 1] += 1;
      count += 1;
    }
  }
  return count;
}

console.log(solution(Number(input[0]), input[1].split(" ").map(Number)));
