/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const MOD = 10 ** 9 + 7
    const arr = [];
    
    for (let start = 0; start < nums.length; start++) {
        let tempSum = 0;
        for (let end = start; end < nums.length; end++) {
            tempSum += nums[end];
            arr.push(tempSum);
        }
    }
    arr.sort((a, b) => a - b);
    console.log(arr)
    let result = 0;
    for (let i = left - 1; i < right; i++) {
        result += arr[i];
        result %= MOD
    }
    return result;
};