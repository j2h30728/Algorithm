function solution(myString) {
    let result ="";
    for(let i of myString ){
        result += i < "l" ? "l" : i;
    }
    return result;
}