function solution(n) {
    let a = 1, b = 1;
    for(let i = 2; i <= n; i++) {
        let tmp = (a + b) % 1234567;
        a = b;
        b = tmp;
    }
    return b;
}
