const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice();
const [number, arr] = input;

function isPrime(number) {
  if (number === 1) return false;
  if (number === 2 || number === 3) return true;
  for (i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(arr) {
  return arr.filter(isPrime).length;
}
console.log(solution(arr.split(" ").map((x) => parseInt(x))));
