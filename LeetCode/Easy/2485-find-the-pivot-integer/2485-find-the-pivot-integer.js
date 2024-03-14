/**
 * @param {number} n
 * @return {number}
 */
const obj = {};
const sum = (num) => {
    if (num < 0) return 0;
    if (!obj[num]) {
        obj[num] = num + sum(num - 1);
    }
    return obj[num];
}
var pivotInteger = function (n) {
    for (let i = n; i >= 0; i--) {
        if ((sum(n) - sum(i - 1)) === sum(i)) {
            return i;
        }
    }
    return -1;
};