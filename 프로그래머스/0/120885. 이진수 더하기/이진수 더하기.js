function solution(bin1, bin2) {
    let sum = parseInt(bin1, 2) + parseInt(bin2, 2);
    const arr = [];
    while(sum > 0){
        arr.push(sum % 2);
        sum = Math.floor(sum / 2);
    }
    if(arr.length === 0 ) arr.push(0);
    return arr.reverse().join('');
}