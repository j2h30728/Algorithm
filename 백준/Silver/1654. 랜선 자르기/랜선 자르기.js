const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [number, ...arr] = input;
const [k, n] = number.split(" ").map(Number);

function solution(need, arr) {
  let min = 1;
  let max = Math.max(...arr);
  let result = 0;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    result = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
    if (result >= need) {
      result = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return max;
}
console.log(solution(n, arr.map(Number)));
