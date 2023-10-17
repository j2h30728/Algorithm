const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input.map((x) => x.split(" ").map(Number));

function queue(n, arr) {
  const queue = arr.slice();
  let M = n[1];
  let count = 1;
  while (queue.length > 0) {
    if (Math.max(...queue) === queue[0]) {
      if (M === 0) {
        return count;
      }
      queue.shift();
      M--;
      count++;
    } else {
      const start = queue.shift();
      queue.push(start);
      M === 0 ? (M = queue.length - 1) : M--;
    }
  }
}

function solution(n, arr) {
  const result = [];
  for (let i = 0; i < n * 2; i += 2) {
    result.push(queue(arr[i], arr[i + 1]));
  }
  return result.join("\n");
}

console.log(solution(n, arr));
