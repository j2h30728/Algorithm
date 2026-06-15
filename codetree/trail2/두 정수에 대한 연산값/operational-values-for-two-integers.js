const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function cal(a, b){
    if(a > b){
        console.log((a + 25) + ' ' + b * 2);
    } else{
        console.log(a * 2 + ' ' + (b + 25));
    }
}

cal(a,b);