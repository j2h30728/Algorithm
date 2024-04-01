/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    let count = 0;
    let leftIndex = -1, rightIndex = -1, lastInvalid = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < minK || nums[i] > maxK) lastInvalid = i;
        if(nums[i] === minK) leftIndex = i;
        if(nums[i] === maxK) rightIndex = i;
        count += Math.max(0, Math.min(leftIndex, rightIndex) - lastInvalid)
    }
    return count;
};