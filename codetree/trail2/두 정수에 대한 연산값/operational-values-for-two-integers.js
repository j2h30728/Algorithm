const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function changeNumber(a, b){
    if(a > b){
        b *= 2;
        a += 25;
    }else{
        a *= 2;
        b += 25;
    }

    return [a ,b];
}

[a, b] = changeNumber(a, b);

console.log(a, b);