function solution(n) {
    let i = 1;
    let result = 0;
    while(i <= n){
        if(n % i === 0){
            result += i;
        }
        i++;
    }
    return result;
}