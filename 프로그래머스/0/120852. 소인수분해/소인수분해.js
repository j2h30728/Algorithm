const isPrime = (num) => {
    if(num === 2) return true;
    
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

const calPrime = (num) => {
    const arr = [];
    let count = 2;
    while(count <= num){
        if(num % count === 0){
            num = Math.floor(num / count);
            if(isPrime(count)){
                arr.push(count);   
            }
        }
        count++;
    }
    return arr;
}

function solution(n) {
    const set = new Set(calPrime(n))
    return [...set].sort((a,b) => a - b);
}

