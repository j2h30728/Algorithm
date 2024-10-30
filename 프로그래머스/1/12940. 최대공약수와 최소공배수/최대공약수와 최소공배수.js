function solution(n, m) {
    var answer = [];
    const gcd = getGCD(Math.max(m, n), Math.min(m, n));
    const lcd = m / gcd * n / gcd * gcd;
    return [gcd, lcd];
}

function getGCD (a, b) {
    return b === 0 ? a : getGCD(b, a % b)
}