/**
 * @param {number} n
 * @return {number}
 */
const sum = (num) => {
    if (num < 0) return 0;
    return num + sum(num - 1);
}
var pivotInteger = function (n) {
    for (let i = n; i >= 0; i--) {
        if ((sum(n) - sum(i - 1)) === sum(i)) {
            return i;
        }
    }
    return -1;
};