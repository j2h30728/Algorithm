const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function abs(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = Math.abs(arr[i]);
    }
}

abs(arr);
arr.map(x => process.stdout.write(x + ' '));