const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [a, ...arr] = input;
const size = a.split(" ").map(Number);
const block = arr.map((x) => x.split(" ").map(Number));

function solution(a, b) {
  const result = [];
  for (let i = 0; i <= 256; i++) {
    let time = 0;
    let needBlock = 0;
    let hasBlock = a[2];
    for (const arr of b) {
      arr.forEach((x) => {
        if (x < i) {
          needBlock += 1 * (i - x);
          time += 1 * (i - x);
        } else if (x > i) {
          time += 2 * (x - i);
          hasBlock += x - i;
        }
      });
    }
    if (hasBlock - needBlock >= 0) {
      result.push([time, i]);
    }
  }
  const [time, height] = result.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  })[0];

  return [time, height].join(" ");
}

console.log(solution(size, block));
