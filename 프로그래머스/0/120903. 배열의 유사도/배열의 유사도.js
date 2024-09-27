function solution(s1, s2) {
    const obj = {};
    let count = 0;
    s1.forEach(x => obj[x] = (obj[x] || 0) + 1);
    s2.forEach(x => {
        if(obj[x]){
            obj[x] -= 1;
            count++;
        }
    })
    return count;
}