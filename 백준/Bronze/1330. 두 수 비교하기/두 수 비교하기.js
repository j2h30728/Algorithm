const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")[0]
  .trim()
  .split(" ")
  .map((x) => +x);

function solution(input) {
  const [a, b] = input;
  if (a > b) {
    console.log(">");
  }
  if (a < b) {
    console.log("<");
  }
  if (a === b) {
    console.log("==");
  }
}
solution(input);
