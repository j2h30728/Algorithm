const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(0, -1);

function stack(string) {
  const arr = [];
  const bracket = {
    ")": "(",
    "]": "[",
  };
  const newArr = string.split("");
  for (const char of newArr) {
    if (char === "(" || char === "[") {
      arr.push(char);
    }
    if (char === ")" || char === "]") {
      if (arr.at(-1) === bracket[char]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
}

function solution(input) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const string = input[i].trim();
    const isTrue = stack(string) ? "yes" : "no";
    result.push(isTrue);
  }
  return result.join("\n");
}

console.log(solution(input));
