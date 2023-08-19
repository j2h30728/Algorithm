function solution(t, p) {
    let count = 0;
    for(let i = 0; i < t.length - p.length + 1; i++){
        const word = t.slice(i,i+p.length) * 1;
        if(word <= p * 1){
            count++;
        }
    }
    return count;
}