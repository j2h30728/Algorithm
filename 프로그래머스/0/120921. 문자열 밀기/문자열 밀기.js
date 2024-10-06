function solution(A, B) {
    const newA = A + A;
    for(let i = A.length; i > 0; i--){
        const a = newA.slice(i , i + A.length);
        if(a === B){
            return A.length - i;
        }
    }
    return -1;
}