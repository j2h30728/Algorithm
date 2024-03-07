/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let count = 0;
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        if(nums[start] + nums[end] < target){
            count += end - start;
            start++;
        }else{
            end--;
        }
    }
    return count;
};