function solution(a, b) {
    let max = Math.max(a,b);
    let min = Math.min(a,b)
    let result = 0
    while(max >= min){
        result += min;
        min++
    }
    return result;
}