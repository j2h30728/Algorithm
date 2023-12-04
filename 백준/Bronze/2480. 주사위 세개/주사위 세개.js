const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(a) {
  const obj = {};
  a.forEach((x) => {
    obj[x] = (obj[x] || 0) + 1;
  });
  let result = 0;
  const arr = Object.entries(obj);
  if (arr.length == 3) {
    const [number] = arr.sort((a, b) => b[0] - a[0]).at(0);
    result = +number * 100;
  }
  if (arr.length == 2) {
    const [number] = arr.sort((a, b) => b[1] - a[1]).at(0);
    result = 1000 + +number * 100;
  }
  if (arr.length == 1) {
    const [number] = arr.at(0);
    result = 10000 + +number * 1000;
  }
  return result;
}

console.log(solution(input.split(" ").map(Number)));
