const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isPrime (n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }   
    return true;
}

function isSumEven(n){
    let sum = 0;
    while(n >= 1) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    
    return sum % 2 == 0;
}

let count = 0;
for(let i = A; i <= B; i++){
    if(isPrime(i) && isSumEven(i)){
        count++;
    }
}

console.log(count);