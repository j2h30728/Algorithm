/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    const arr = Array.from({ length: n }, ((x, i) => [0, 0]))
    trust.forEach(([a, b]) => {
        arr[a - 1][0]++;
        arr[b - 1][1]++;
    })
    const index = arr.findIndex(([a, b]) => {
        if (a === 0 & b === n - 1) return true;
    })
    return index < 0 ? index : index + 1;
};