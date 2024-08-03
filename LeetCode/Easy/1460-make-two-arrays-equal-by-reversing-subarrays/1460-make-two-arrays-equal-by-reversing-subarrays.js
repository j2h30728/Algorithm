/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const obj = {};
    for(const num of arr){
        obj[num] = (obj[num] || 0) + 1;
    }
    for(const num of target){
        const formatNum = String(num);
        if(obj[formatNum]){
            obj[formatNum] -= 1;
        }else{
            return false;
        }
    }
    return true;
};