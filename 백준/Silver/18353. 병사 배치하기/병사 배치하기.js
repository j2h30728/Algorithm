const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input;

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

function solution(n, m) {
  const result = [0];
  const arr = m.reverse();
  for (const x of arr) {
    if (result.at(-1) < x) {
      result.push(x);
    } else {
      const index = lowerBound(result, x, 0, result.length);
      result[index] = x;
    }
  }
  const count = result.slice(1).length;
  return n - count;
}

console.log(solution(Number(N), M.split(" ").map(Number)));
