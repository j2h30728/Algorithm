function solution(arr) {
    let number = 1;
    while(number < arr.length){
        number *= 2;
    }
    const zero = Array.from({length : number - arr.length}, () => 0);
    return arr.concat(zero);
}