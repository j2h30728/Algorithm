const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
const array = new Array(n).fill(0);

segments.forEach(([start, end]) => {
    for(let i = start - 1; i < end; i++){
        array[i] += 1;
    }
})

console.log(Math.max(...array));