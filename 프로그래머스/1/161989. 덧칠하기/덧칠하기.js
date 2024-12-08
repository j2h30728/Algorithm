function solution(n, m, sections) {
    let painted = 0;
    let count = 0;
    for(let section of sections) {
        if(painted < section) {
            painted = section + m - 1;
            count++;
        }
    }
    return count;
}