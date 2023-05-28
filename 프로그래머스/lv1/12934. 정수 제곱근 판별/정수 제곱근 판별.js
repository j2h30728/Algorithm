function solution(n) {
    const sqrtNum = Math.sqrt(n)
     return Number.isInteger(sqrtNum) ? Math.pow(sqrtNum + 1,2) : -1;
}















/*
function solution(n) {
    let num = Math.sqrt(n);
    
    return (num == Math.floor(num) ? Math.pow(num+1,2) : -1)
}

*/