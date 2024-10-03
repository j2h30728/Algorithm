function gcd (a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(a, b) {
    const gcdNum = gcd(a, b);
    let denominator = b / gcdNum;
    
    while(denominator % 2 === 0){
        denominator /= 2;
    }
    while(denominator % 5 === 0){
        denominator /= 5;
    }
    
    return (denominator === 1) ? 1 : 2;
}