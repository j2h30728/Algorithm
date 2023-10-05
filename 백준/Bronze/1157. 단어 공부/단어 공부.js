const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(a) {
  const upperCase = a.toUpperCase();
  const obj = upperCase.split("").reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;
    return obj;
  }, {});
  const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  const values = Object.values(obj).sort((a, b) => b - a);
  if (values.slice(1).includes(values[0])) return console.log("?");

  return console.log(entries[0][0]);
}
solution(input);
