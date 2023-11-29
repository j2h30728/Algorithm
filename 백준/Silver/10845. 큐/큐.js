const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...arr] = input;

function solution(n, m) {
  const queue = [];
  const result = [];
  for (let i = 0; i < m.length; i++) {
    const [type, num] = m[i];
    if (type === "push") {
      queue.push(num);
    }
    if (type === "pop") {
      result.push(queue.shift() ?? -1);
    }
    if (type === "size") {
      result.push(queue.length);
    }
    if (type === "empty") {
      result.push(queue.length === 0 ? 1 : 0);
    }
    if (type === "front") {
      result.push(queue.at(0) ?? -1);
    }
    if (type === "back") {
      result.push(queue.at(-1) ?? -1);
    }
  }

  return result.join("\n");
}

console.log(
  solution(
    Number(a),
    arr.map((x) => x.split(" ")).map(([str, num]) => [str, num ? Number(num) : 0])
  )
);
