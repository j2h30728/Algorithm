function solution(ineq, eq, n, m) {
    if(n - m === 0){
       return (eq === '=') ? 1 : 0;
    }else if(ineq === '>') {
       return n - m  > 0 ?  1 : 0;
    } else {
        return n - m  < 0 ?  1 : 0;
    }
}