function solution(n, k) {
    const devide= Math.floor(n/k);
    return Array.from({length: devide}).fill(0).map((_,i)=> k * (i + 1))
}