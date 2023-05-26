function solution(start, end) {
    const arr = new Array(end - start + 1);
    for(let i = 0 ; i <= end-start; i++){
        arr[i] = start + i;
    }
    return arr;
}