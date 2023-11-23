const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [t, ...arr] = input.map((x) => {
  if (!isNaN(parseInt(x))) {
    return parseInt(x);
  }
  return x.split(" ");
});

function solution(t, arr) {
  let result = [];
  let index = 0;

  for (let i = 0; i < t; i++) {
    const clothesCount = arr[index];
    const clothes = arr.slice(index + 1, index + 1 + clothesCount);
    index += clothesCount + 1;

    const map = new Map();
    clothes.forEach(([_, category]) => {
      map.set(category, (map.get(category) || 0) + 1);
    });

    const combinations = Array.from(map.values()).reduce((acc, curr) => acc * (curr + 1), 1) - 1;
    result.push(combinations);
  }

  return result.join("\n");
}

console.log(solution(t, arr));
