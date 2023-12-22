const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...M] = input;

const palindrome = (str) => {
  return str === str.split("").reverse().join("");
};

function solution(n, arr) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const word = arr.at(i);
    if (palindrome(arr.at(i))) {
      result.push(0);
    } else {
      const end = word.length;
      for (let j = 0; j < parseInt(end / 2); j++) {
        if (word.at(j) !== word.at(-j - 1)) {
          if (
            palindrome(word.slice(0, j) + word.slice(j + 1, end)) ||
            palindrome(word.slice(0, end - j - 1) + word.slice(end - j, end))
          ) {
            result.push(1);
          } else {
            result.push(2);
          }
          break;
        }
      }
    }
  }
  return result.join("\n");
}

console.log(solution(Number(N), M));
