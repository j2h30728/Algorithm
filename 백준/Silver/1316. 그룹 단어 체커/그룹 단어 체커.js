const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...strings] = input;

function solution(a, b) {
  let count = 0;
  b.forEach((string) => {
    const arr = [];
    for (const char of string) {
      if (arr.includes(char) && arr.at(-1) !== char) {
        break;
      } else {
        arr.push(char);
      }
      if (arr.length === string.length) {
        count++;
      }
    }
  });
  return count;
}

console.log(solution(n, strings));
