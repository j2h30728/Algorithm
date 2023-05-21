function solution(n) {
    let result = 0;
    let count = 1;
    while(count<= n){
        if(n % count === 0) result += count;
        count++
    }
    return result;
}