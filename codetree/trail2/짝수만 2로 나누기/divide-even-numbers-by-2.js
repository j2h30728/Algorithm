const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
for(let i = 0; i < n; i++){
    if(arr[i] % 2 === 0){
        process.stdout.write(Math.floor(arr[i] / 2) + " ");
    } else {
        process.stdout.write(arr[i] + " ");
    }
}