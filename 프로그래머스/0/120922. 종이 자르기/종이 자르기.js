function solution(M, N) {
    const min = Math.min(N, M);
    const max = Math.max(N, M);
    
    return (min - 1) + min * (max - 1); 
}