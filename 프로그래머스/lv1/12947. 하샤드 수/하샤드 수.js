function solution(x) {
    let y= 0;
    let a = x;
    do {
        y += a%10;
        a = Math.floor(a/10)
    }while(a>0)    

    return x % y === 0 ? true : false;
        
        
    var answer = true;
    return answer;
}