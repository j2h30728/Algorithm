function solution(lines) {
    const start = Math.min(...lines.flat());
    const end = Math.max(...lines.flat());

    const arr = Array.from({length: end - start}, () => 0);
    
    lines.forEach(([s, e]) => {
        for(let i = s; i < e; i++){
            arr[i - start] += 1;
        }
    })
    return arr.filter(x => x > 1).length;
}