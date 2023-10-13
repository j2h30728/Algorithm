const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((x) => parseInt(x));

function solution(a, b) {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  const LCM = (a * b) / num1;
  return [num1, LCM].join("\n");
}
console.log(solution(input[0], input[1]));
