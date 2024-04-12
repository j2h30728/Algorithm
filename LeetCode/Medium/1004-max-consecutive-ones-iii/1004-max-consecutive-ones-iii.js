/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let zeroCount = 0;
    let maxCount = 0;
    let right = 0; left = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxCount = Math.max(maxCount, right - left + 1);
        right++;
    }
    return maxCount;
};