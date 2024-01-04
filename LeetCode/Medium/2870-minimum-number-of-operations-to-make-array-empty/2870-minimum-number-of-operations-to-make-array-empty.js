/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const map = new Map();
    nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

    let count = 0;
    for (const num of map.values()) {
        if (num === 1) {
            return -1;
        }
        count += Math.ceil(num / 3);
    }
    return count;
};