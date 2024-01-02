/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const hash = {}
    for (const num of nums) {
        let index = 0;
        const keyLength = Object.keys(hash).length;
        while (index < keyLength + 1) {
            if (!hash[index] || !hash[index]?.includes(num)) {
                hash[index] = hash[index] ? [...hash[index], num] : [num];
                break;
            }
            index++;
        }
    }
    return Object.values(hash);
};