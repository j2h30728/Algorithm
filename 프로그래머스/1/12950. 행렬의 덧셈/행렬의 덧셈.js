function solution(arr1, arr2) {
    const col = arr1.length;
    const raw = arr1[0].length;
    const result = Array.from({length : col}, () => new Array(raw));
    for(let j = 0; j < col; j++ ){
        for(let i = 0; i < raw; i++){
            result[j][i] = arr1[j][i] + arr2[j][i];
        }
    }
    return result;
}