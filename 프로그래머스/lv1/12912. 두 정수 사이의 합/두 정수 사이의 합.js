function solution(a, b) {
    let answer = 0;
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        answer += i;
    }
    return answer;
}
/*
function solution(a, b) {
    
   return (a+b) * (Math.abs(a-b)+1)*1/2
   
//     let result = 0
//     for(let i =Math.min(a,b) ; i <=  Math.max(a,b) ; i++){
//         result += i;
//     }
//     return result;
}
*/