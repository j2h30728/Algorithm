/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const sum = nums.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0)
            stack.push(sum);
        }
    }
    stack.sort((a, b) => a - b)
    return stack.slice(left - 1, right).reduce((a, c) => a + c, 0) % (Math.pow(10, 9) + 7)
};