const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, ...arr] = input;

function solution(n, arr) {
  const obj = {};
  obj[1] = 1;
  obj[2] = 2;
  obj[3] = 4;
  const result = [];
  arr.forEach((x) => {
    for (let i = 4; i <= x; i++) {
      if (!obj[i]) {
        obj[i] = obj[i - 1] + obj[i - 2] + obj[i - 3];
      }
    }
    result.push(obj[x]);
  });

  return result.join("\n");
}

console.log(solution(Number(n), arr.map(Number)));
