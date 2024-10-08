function solution(arr1, arr2) {
    const row1 = arr1.length; // 3
    const col1 = arr1[0].length; // 2
    
    const row2 = arr2.length; // 2
    const col2 = arr2[0].length; // 2
    
    // 2 * 3 (가로 2 , 세로 3)
    const result = [...new Array(row1)].map((_, i)=> new Array(col2).fill(0));
    
    
    for(let i = 0; i < row1; i++){
        for(let j = 0; j < col2; j++){
            for(let k = 0; k < col1; k++){
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return result;
}