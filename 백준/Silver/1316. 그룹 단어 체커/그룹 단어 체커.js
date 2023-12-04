const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...strings] = input;

const check = (string) => {
  const set = new Set(string[0]);
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      if (set.has(string[i])) {
        return false;
      } else {
        set.add(string[i]);
      }
    }
  }
  return true;
};

function solution(a, arr) {
  return arr.filter((x) => check(x)).length;
}

console.log(solution(n, strings));
