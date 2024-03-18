/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    const map = new Map();
    map.set(0, -1);
    let count = 0;
    let maxLength = 0;
    nums.forEach((num, index) => {
        if (num === 0) {
            count -= 1;
        } else {
            count += 1;
        }
        if (!map.has(count)) {
            map.set(count, index);
        } else {
            maxLength = Math.max(index - map.get(count), maxLength);
        }
    })
    return maxLength;
};

