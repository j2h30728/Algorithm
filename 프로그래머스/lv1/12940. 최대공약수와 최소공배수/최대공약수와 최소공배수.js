function solution(n, m) {
    let a=Math.min(n,m);
    let b=Math.max(n,m);
    
    for(let i = Math.min(n,m); i>0; i--){
        if(n % i === 0 && m % i === 0) break;
        a--;
    }
    while(b>0){
        if(b % n === 0 && b % m === 0)break;
        b++;
    }
    
    return [a,b];
}