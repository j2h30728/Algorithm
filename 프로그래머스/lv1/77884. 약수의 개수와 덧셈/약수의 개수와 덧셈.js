function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++){
        (Number.isInteger(Math.sqrt(i))) ? answer -= i : answer += i;
    }
    return answer;
    
    // let answer = 0
    // for(let num = left; num <=right; num ++){
    //    const arr = [];
    //     for(let i =1 ; i <=num; i++){
    //         if(num % i === 0) {
    //             arr.push(i);
    //         }
    //     }
    //     arr.length % 2 === 0 ? answer += num : answer -= num;
    // }
    // return answer;
}