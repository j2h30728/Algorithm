const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [h, m] = input;

function solution(a, b) {
  const calHour = (parseInt((a[1] + b) / 60) + a[0]) % 24;
  const minutes = (a[1] + b) % 60;

  return [calHour, minutes].join(" ");
}

console.log(solution(h.split(" ").map(Number), Number(m)));
