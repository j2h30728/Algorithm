function solution(n, m, section) {
    const arr = Array.from({length : n + 1}).map((x, i) => section.includes(i) ? 1 : 0);
    let start = section[0];
    let count = 0;
    while(start <= section.at(-1)){
        if(arr[start] === 1){
            count++;
            for(let i = start; i < start + m; i++){
                arr[i] = true;
            }
        }
        start++;
    }
    return count;
}