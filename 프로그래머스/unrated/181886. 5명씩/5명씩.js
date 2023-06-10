function solution(names) {
    let num =0;
    const arr = [];
    while(num < names.length){
        arr.push(names[num]);
        num += 5;
    }
    return arr;
}