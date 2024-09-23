function solution(n) {
    const result = [];
    for(let i = 2; i <= n; i++){
        while(n % i === 0){
            n = Math.floor(n / i);
            result.push(i);
        }
    }
    return [...new Set(result)];
}

