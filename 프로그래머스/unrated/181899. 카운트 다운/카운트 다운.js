function solution(start, end) {
    const arr = new Array(start-end+1);
    for(let i = 0; i < arr.length; i++){
        arr[i] = start-i;
    }
    return arr;
}