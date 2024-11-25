function solution(n, arr1, arr2) {
    const result = Array.from({length: n}, () => Array(n).fill(' '));
    for(let i = 0; i < n; i++){
        const num1 = getBinary(arr1[i]).padStart(n, '0');
        const num2 = getBinary(arr2[i]).padStart(n, '0');
        for(let j = 0; j < n; j++){
            if(+num1[j] || +num2[j]){
                result[i][j] = '#';
            }
        }
        result[i] = result[i].join('');
    }
    return result;
}
function getBinary (num) {
    const arr = [];
    while(num > 0) {
        arr.push(num % 2);
        num = Math.floor(num / 2);
    }
    return arr.reverse().join('');
}