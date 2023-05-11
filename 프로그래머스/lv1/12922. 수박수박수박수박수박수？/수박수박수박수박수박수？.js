function solution(n) {
    return `${"수박".repeat(Math.floor(n/2))}${(n % 2 === 1) ? "수" : ""}`
}

// function solution(n) {
//     let num = 0;
//     let answer = ""
//     while(num < n){
//         answer += (num % 2 === 0) ? "수" : "박";
//         num++;
//     }
//     return answer;
// }