const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const [num, ...arr] = input;

function solution(a, b) {
  const obj = {};
  obj[1] = 1;
  obj[2] = 1;
  obj[3] = 1;
  const result = [];
  b.forEach((x) => {
    for (let i = 3; i <= x; i++) {
      if (!obj[i]) {
        obj[i] = obj[i - 2] + obj[i - 3];
      }
    }
    result.push(obj[x]);
  });

  return result.join("\n");
}

console.log(solution(num, arr));
