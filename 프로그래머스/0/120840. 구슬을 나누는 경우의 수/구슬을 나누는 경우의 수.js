const factorial = (num) => {
    if(num === 1 || num === 0){
        return (1);
    }
    return (num) * factorial(num - 1);
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

