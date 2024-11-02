function solution(n) {
    const arr = [];
    while(n > 0) {
        arr.push(n % 3);
        n = Math.floor(n / 3);
    }
    return parseInt(arr.join(''), 3);
}