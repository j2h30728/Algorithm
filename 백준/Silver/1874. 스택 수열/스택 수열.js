const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...arr] = input;

function solution(a, b) {
  const answer = [];
  const stack = [];
  let num = 0;
  for (let i = 0; i < a; i++) {
    while (stack.at(-1) ?? 0 <= b[i]) {
      if (stack.at(-1) === b[i]) {
        stack.pop();
        answer.push("-");
        break;
      } else if (num <= a) {
        num++;
        stack.push(num);
        answer.push("+");
      } else {
        return "NO";
      }
    }
  }
  return answer.join("\n");
}

console.log(solution(Number(a), arr.map(Number)));
