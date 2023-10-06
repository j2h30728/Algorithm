const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const number = Number(input);
  switch (true) {
    case number % 400 === 0:
      return 1;
    case number % 4 === 0 && number % 100 !== 0:
      return 1;
    default:
      return 0;
  }
}
console.log(solution(input));
