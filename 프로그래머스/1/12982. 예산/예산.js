function solution(d, budget) {
    const arr = d.sort((a, b) => a - b);
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum === budget) {
            return i + 1;
        }
        if(sum > budget) {
            return i;
        }
    }
    return arr.length;
}