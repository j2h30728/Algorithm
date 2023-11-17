const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...arr] = input;

const format = (str) => str.split(" ").map(Number);

function solution(n, arr) {
  const pokemon = arr.slice(0, n[0]);
  const hash = arr.slice(n[0]);
  const result = [];

  const map = {};
  pokemon.forEach((value, index) => {
    map[index + 1] = value;
    map[value] = index + 1;
  });
  hash.map((value) => result.push(map[value]));
  return result.join("\n");
}

console.log(solution(format(a), arr));
