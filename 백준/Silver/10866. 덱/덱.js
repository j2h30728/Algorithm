const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...arr] = input;

function solution(a, b) {
  const result = [];
  const queue = [];
  for (let i = 0; i < a; i++) {
    const [type, num] = b[i];

    if (type === "push_front") {
      queue.unshift(num);
    }
    if (type === "push_back") {
      queue.push(num);
    }
    if (type === "pop_front") {
      result.push(queue.shift() ?? -1);
    }
    if (type === "pop_back") {
      result.push(queue.pop() ?? -1);
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
    Number(n),
    arr.map((x) => x.split(" "))
  )
);
