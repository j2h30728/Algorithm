function solution(a, b, n) {
    function helper(b,n,a){
        if((a / b) < 1) return 0;
        const get = Math.floor(a/ b) * n;
        const empty = Math.floor(a / b) * n + a % b;    
        return get + helper(b,n,empty);
    }
    return helper(a,b,n);
    
}