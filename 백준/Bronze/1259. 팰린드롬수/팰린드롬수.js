const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(0, -1);

function solution(input) {
  const result = [];
  for (const num of input) {
    let count = 0;
    for (let i = 0; i < num.length / 2; i++) {
      if (num.at(i) == num.at(-1 - i)) {
        count++;
      }
    }
    Math.ceil(num.length / 2) == count ? result.push("yes") : result.push("no");
  }
  return result.join("\n");
}
console.log(solution(input));
