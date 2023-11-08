const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1);

function solution(n, m, arr) {
  const people = [];
  const obj = {};
  const nArr = arr.slice(0, m);
  const mArr = arr.slice(m);

  nArr.forEach((x) => {
    obj[x] = 1;
  });
  mArr.forEach((x) => {
    if (obj[x]) {
      people.push(x);
    }
  });
  people.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  return [people.length, people.join("\n")].join("\n");
}

console.log(solution(N, M, arr));
