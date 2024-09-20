const factorial = (num) => {
    if(num === 1 || num === 0){
        return BigInt(1);
    }
    return BigInt(num) * factorial(num - 1);
}

function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

