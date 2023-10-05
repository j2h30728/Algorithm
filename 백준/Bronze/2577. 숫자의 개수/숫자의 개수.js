const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => Number(x));

function solution(input) {
  const [a, b, c] = input;
  let multiple = a * b * c;
  const newArray = Array.from({ length: 10 }).fill(0);
  while (multiple > 0) {
    const number = multiple % 10;
    newArray[number] += 1;
    multiple = Math.floor(multiple / 10);
  }
  newArray.forEach((x) => console.log(x));
}
solution(input);
