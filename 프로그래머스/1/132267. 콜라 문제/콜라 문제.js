function solution(a, b, n) {
    let count = 0;
    while(n >= a){
        let changed = Math.floor(n / a) * b;
        count += changed;
        n = n % a + changed;
    }
    return count;
}