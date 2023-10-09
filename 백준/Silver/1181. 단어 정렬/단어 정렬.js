const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

function solution(input) {
  const uniqueInput = Array.from(new Set(input));
  for (let i = 0; i < uniqueInput.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < uniqueInput.length; j++) {
      if (
        uniqueInput[minIndex].length > uniqueInput[j].length ||
        (uniqueInput[minIndex].length === uniqueInput[j].length && uniqueInput[minIndex] > uniqueInput[j])
      ) {
        minIndex = j;
      }
    }
    let temp = uniqueInput[minIndex];
    uniqueInput[minIndex] = uniqueInput[i];
    uniqueInput[i] = temp;
  }
  return uniqueInput.join("\n");
}
console.log(solution(input));
