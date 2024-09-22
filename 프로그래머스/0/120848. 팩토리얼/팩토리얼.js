function solution(n) {
    let number = 1;
    let count = 0;
    while(number <= n){
        count++;
        number = count * number;
    }
    return number === n ? count : count - 1;
}