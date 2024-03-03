/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const memo = {};

    function helper(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;
        if(memo[n]) return memo[n];

        const result = helper(n - 1) + helper(n - 2);
        memo[n] = result;
        return result;
    }
    return helper(n);
};