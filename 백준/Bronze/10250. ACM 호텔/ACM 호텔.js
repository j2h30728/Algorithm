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
  const result = [];
  for (const arr of input) {
    const [H, W, N] = arr;
    const column = N % H ? N % H : H;
    const row = Math.ceil(N / H);
    result.push(column.toString() + row.toString().padStart(2, "0"));
  }
  return result.join("\n");
}
console.log(solution(input));
