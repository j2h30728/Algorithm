const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.
const MONTHS_30 = [4, 6, 9, 11];

function isValid(m, d) {
    if (m > 12){
        return false;
    }

    if (m === 2) {
        return d <= 28;
    }

    if (MONTHS_30.includes(m)) {
        return d <= 30;
    }

    return d <= 31;
}

console.log(isValid(m, d) ? 'Yes' : 'No')