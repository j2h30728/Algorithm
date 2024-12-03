function solution(number, limit, power) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        const count = getPrime(i);
        sum += count > limit ? power : count;
    }
    return sum;
}

function getPrime (num) {
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            count++;
            if(i !== num / i) count++;
        };
    }
    return count;
}
