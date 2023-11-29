const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(0, -1);

function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const [a, b, c] = arr[i].map(Number).sort((a, b) => b - a);
    if (a ** 2 === b ** 2 + c ** 2) {
      result.push("right");
    } else {
      result.push("wrong");
    }
  }
  return result.join("\n");
}

console.log(solution(input.map((x) => x.split(" "))));
