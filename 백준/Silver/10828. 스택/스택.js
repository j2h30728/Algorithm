const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((x) => x.split(" "));

function solution(input) {
  const stack = [];
  const result = [];
  for (const arr of input) {
    if (arr[0] === "push") {
      stack.push(arr[1]);
    }
    if (arr[0] === "top") {
      stack.length == 0 ? result.push(-1) : result.push(stack.at(-1));
    }
    if (arr[0] === "pop") {
      stack.length == 0 ? result.push(-1) : result.push(stack.pop());
    }
    if (arr[0] === "size") {
      result.push(stack.length);
    }
    if (arr[0] === "empty") {
      stack.length === 0 ? result.push(1) : result.push(0);
    }
  }
  return result.join("\n");
}
console.log(solution(input));
