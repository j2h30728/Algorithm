function solution(t, p) {
    let count = 0;
    let prev = t.slice(0, p.length);
    if(prev <= p) {count++};

    for(let j = p.length; j < t.length; j++) {
        prev = prev.slice(1) + t[j];
        if(prev <= p){
            count++;
        }
    }
    return count;
}