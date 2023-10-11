const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice();
const [number, ...arr] = input;

function solution(number, arr) {
  const result = [];
  const open = "(";
  for (let i = 0; i < number; i++) {
    const newArr = [];
    for (const str of arr[i]) {
      if (str === open) {
        newArr.push(str);
      } else {
        if (newArr.at(-1) === open) {
          newArr.pop();
        } else {
          newArr.push(str);
        }
      }
    }
    result.push(newArr.length === 0 ? "YES" : "NO");
  }
  return result.join("\n");
}
console.log(solution(number, arr));
