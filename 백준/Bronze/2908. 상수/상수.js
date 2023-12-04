const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(a) {
  const result = a.map((x) => {
    let temp = [];
    while (x > 1) {
      temp.push(parseInt(x % 10));
      x = x / 10;
    }
    return temp.join("");
  });

  return Math.max(...result);
}

console.log(solution(input.split(" ").map(Number)));
