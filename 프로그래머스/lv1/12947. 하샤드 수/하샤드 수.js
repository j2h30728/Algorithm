function solution(x) {
    let num =0; 
    let  loopNum= x;
    while(loopNum > 0 ){
        num += Math.floor(loopNum % 10);
        loopNum = loopNum / 10;
    }
    return x % num === 0 ;
}














/*
function solution(x) {
    let y= 0;
    let a = x;
    do {
        y += a%10;
        a = Math.floor(a/10)
    }while(a>0)    

    return x % y === 0 ? true : false;
}
*/