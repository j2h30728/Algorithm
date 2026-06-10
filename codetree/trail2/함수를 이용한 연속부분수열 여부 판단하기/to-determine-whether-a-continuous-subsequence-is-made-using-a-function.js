const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function isSame(a, b, startIndex) {
    for(let i = 0; i < b.length; i++){
        if(a[startIndex + i] !== b[i]){
            return false;
        }
    }
    return true;
}

function isSubsequence () {
    for(let i = 0; i < n1 - n2 + 1; i++){
        if(isSame(a, b, i)){
            return true;
        }
    }
    return false;
}


if(isSubsequence()){
    console.log('Yes');
}else{
    console.log('No');
}