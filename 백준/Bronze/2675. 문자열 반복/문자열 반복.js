const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const filtered = input.map((x) => x.split(" ")).filter((x) => x.length === 2);
  for (let i = 0; i < filtered.length; i++) {
    let result = "";
    for (ch of filtered[i][1]) {
      result += ch.repeat(filtered[i][0]);
    }
    console.log(result);
  }
}
solution(input);
