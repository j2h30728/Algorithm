const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(n) {
  const queue = new Array(n).fill(0).map((_, i) => i + 1);
  let start = 0;

  while (start < queue.length - 1) {
    start++;
    queue.push(queue[start]);
    start++;
  }

  return queue[start];
}

console.log(solution(Number(input)));
