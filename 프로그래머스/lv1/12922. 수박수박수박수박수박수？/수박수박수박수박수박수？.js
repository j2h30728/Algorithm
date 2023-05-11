function solution(n) {
    let num = 0;
    let answer = ""
    while(num < n){
        answer += (num % 2 === 0) ? "수" : "박";
        num++;
    }
    return answer;
}