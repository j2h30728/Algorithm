const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let result = "";
  for (let i = 1; i <= Number(input); i++) {
    result += i < +input ? `${i}\n` : `${i}`;
  }
  console.log(result);
}
solution(input);
