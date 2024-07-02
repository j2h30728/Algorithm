/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const obj1 = {};
    saveObj(obj1, nums1);
    const result = [];
    for(const num of nums2){
        if(obj1[num] > 0){
            obj1[num] -= 1;
            result.push(num);
        }
    }
    return result;
};


function saveObj (obj , arr) {
    arr.forEach((x)=>{
        obj[x] = (obj[x] || 0) + 1;
    })
    return obj;
}