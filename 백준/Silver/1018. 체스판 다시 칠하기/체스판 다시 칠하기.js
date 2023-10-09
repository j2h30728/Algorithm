const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(a, b) {
  const [w, h] = a;
  const whiteFirst = "WBWBWBWB";
  const blackFirst = "BWBWBWBW";
  const total1 = (whiteFirst + blackFirst).repeat(4).split("");
  const total2 = (blackFirst + whiteFirst).repeat(4).split("");
  let min = 999;
  for (let j = 8; j <= b[0].length; j++) {
    const slicedB = b.map((x) => x.slice(j - 8, j));
    for (let i = 8; i <= slicedB.length; i++) {
      let count1 = 0;
      let count2 = 0;
      const oneB = slicedB
        .slice(i - 8, i)
        .join("")
        .split("");
      for (let k = 0; k < total1.length; k++) {
        if (oneB[k] !== total1[k]) {
          count1++;
        }
        if (oneB[k] !== total2[k]) {
          count2++;
        }
      }
      const countMin = Math.min(count1, count2);
      min = min > countMin ? countMin : min;
    }
  }
  return min;
}
console.log(
  solution(
    input[0].split(" ").map((x) => parseInt(x)),
    input.slice(1)
  )
);
