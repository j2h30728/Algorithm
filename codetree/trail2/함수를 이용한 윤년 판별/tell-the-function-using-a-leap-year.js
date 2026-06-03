const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function isLeafYear (number) {
    if(number % 100 === 0 && number % 400 !== 0){
        return false;
    }

    if(number % 4 === 0){
        return true;
    }
    return false;
}

console.log(isLeafYear(y));