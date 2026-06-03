const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function solution () {
    const arr = [];

    for(let i = A; i <= B; i++) {
        if(isPrime(i)){
            arr.push(i);
        }
    }
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
}


function isPrime(n) {
    let number = 2;

    while(number < n){
        if(n % number === 0){
            return false;
        }
        number++;
    }
    return true;
}


solution();