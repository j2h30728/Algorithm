function solution(arr1, arr2) {
    const rowsArr1 = arr1.length;
    const colsArr1 = arr1[0].length;
    const colsArr2 = arr2[0].length;
    const result = Array.from({ length: rowsArr1 }, () => Array(colsArr2).fill(0));
    for(let i = 0; i < rowsArr1; i++){
        for(let j = 0; j < colsArr2; j++){
            for(let k = 0; k < colsArr1; k++){
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return result;
}