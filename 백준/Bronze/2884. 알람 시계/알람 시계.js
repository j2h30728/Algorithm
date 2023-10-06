const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((x) => Number(x));

function solution(a, b) {
  let totalMinutes = a * 60 + b;
  const calculateTime = totalMinutes - 45 >= 0 ? totalMinutes - 45 : 24 * 60 + (totalMinutes - 45);
  const hours = Math.floor(calculateTime / 60);
  const minutes = calculateTime % 60;
  return [hours, minutes].join(" ");
}
console.log(solution(input[0], input[1]));
