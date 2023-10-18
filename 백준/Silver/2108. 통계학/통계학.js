const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1).map(Number);

/*
산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이
*/
function solution(a) {
  let map = {};
  for (const num of a) {
    map[num] = (map[num] || 0) + 1;
  }
  const average = Math.round(a.reduce((acc, cur) => acc + cur, 0) / a.length);
  const middle = a.sort((a, b) => a - b)[Math.ceil(a.length / 2) - 1];
  const max = Math.max(...Object.values(map));
  const manyArr = Object.entries(map)
    .filter((x) => x[1] === max)
    .sort((a, b) => a[0] - b[0]);
  const many = manyArr.length > 1 ? manyArr[1][0] : manyArr[0][0];
  const range = Math.abs(Math.max(...a) - Math.min(...a));
  return [average, middle, many, range].join("\n");
}

console.log(solution(input));
