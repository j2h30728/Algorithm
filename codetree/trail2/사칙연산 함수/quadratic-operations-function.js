const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function cal (a,b, operator) {
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case'/':
            return Math.floor(a / b);
        case '*':
            return a * b;
        default:
            return false;
    }
}

console.log(cal(a,c,o) !== false ? `${a} ${o} ${c} = ${cal(a,c,o)}` : 'False');