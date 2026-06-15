const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function isPalindrome(string) {
    const l = Math.floor(string.length / 2);


    for (let i = 0; i <= l; i++) {
        const start = string[i];
        const last = string[string.length - 1 - i];
        if (start !== last) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(str) ? 'Yes' : 'No');