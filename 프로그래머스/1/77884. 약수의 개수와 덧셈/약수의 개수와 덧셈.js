function solution(left, right) {
    let arr = [];
    for(let i = left; i <= right; i++){
        let count = 0;
        if(Number.isInteger(Math.sqrt(i))){
            arr.push(-i)
        }else{
            arr.push(i);
        }
    }
    return arr.reduce((acc, cur) => acc + cur, 0)
}
