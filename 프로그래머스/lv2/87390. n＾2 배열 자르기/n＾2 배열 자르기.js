function solution(n, left, right) {
    const result =[]
    for(let i =left; i < right+1; i++){
        result.push(Math.max(Math.ceil((i+1)/n), (i+1)%n || n));
    }
    return result;
}