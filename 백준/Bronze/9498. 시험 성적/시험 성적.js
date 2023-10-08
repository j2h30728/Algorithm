const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  switch (true) {
    case input >= 90 && input <= 100:
      return "A";
    case input >= 80 && input <= 89:
      return "B";
    case input >= 70 && input <= 79:
      return "C";
    case input >= 60 && input <= 69:
      return "D";
    default:
      return "F";
  }
}
console.log(solution(Number(input)));
