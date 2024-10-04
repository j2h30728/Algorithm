function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const na = Math.abs(a - n);
        const nb = Math.abs(b - n);
        if(na === nb){
            return b - a;
        }else{
            return na - nb;
        }
    });
}