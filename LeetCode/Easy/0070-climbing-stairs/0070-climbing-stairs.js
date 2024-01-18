/**
 * @param {number} n
 * @return {number}
 */

const helper = (n, obj) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (!obj[n]) {
        obj[n] = helper(n - 1, obj) + helper(n - 2, obj);
    }
    return obj[n];
}

var climbStairs = function (n) {
    const obj = {};
    return helper(n, obj);
};