const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(input) {
  const customInput = input.split(" ").join("");
  if (customInput === "12345678") {
    return "ascending";
  }
  if (customInput === "87654321") {
    return "descending";
  }
  return "mixed";
}
console.log(solution(input));
