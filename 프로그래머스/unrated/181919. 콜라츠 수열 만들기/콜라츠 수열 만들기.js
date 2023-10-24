function solution(n) {
    const arr = [n];
    while(n !== 1){
        if(n % 2 === 0){
            n = n / 2;
            arr.push(n);
        }else {
            n = 3 * n + 1;
            arr.push(n);
        }
    }
    return arr;
}