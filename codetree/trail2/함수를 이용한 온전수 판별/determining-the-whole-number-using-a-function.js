const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

function is온전수(n){
    if(n % 2 === 0){
        return false;
    }

    if(n % 10 === 5){
        return false;
    }

    if(n % 3 === 0 && n % 9 !== 0){
        return false
    }

    return true;
}

let count = 0;
for(let i = a; i <= b; i++){
    if(is온전수(i)){
        count++;
    }
}

console.log(count);