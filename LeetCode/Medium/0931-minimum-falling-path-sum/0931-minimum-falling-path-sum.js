/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let a = matrix[i - 1][j - 1] === undefined ? Infinity : matrix[i - 1][j - 1];
            let b = matrix[i - 1][j] === undefined ? Infinity : matrix[i - 1][j];
            let c = matrix[i - 1][j + 1] === undefined ? Infinity : matrix[i - 1][j + 1];

            matrix[i][j] = matrix[i][j] + Math.min(a, b, c);
        }
    }
    return Math.min(...matrix.at(-1));
};