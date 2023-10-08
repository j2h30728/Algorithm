const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0].trim();
function solution(input) {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const result = [];
  for (let i = a; i <= z; i++) {
    const alpha = String.fromCharCode(i);
    result.push(input.indexOf(alpha));
  }
  return result.join(" ");
}
console.log(solution(input));
