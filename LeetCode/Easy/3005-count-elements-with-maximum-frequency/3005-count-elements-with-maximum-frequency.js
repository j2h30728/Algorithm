/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map  = new Map();
    nums.forEach((num)=> (!map.get(num))? map.set(num, 1) : map.set(num, map.get(num)+1));
    const arr = Array.from(map).sort((a,b)=>b[1]-a[1]).map(x=>x[1])
    let result = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] > arr[i]){
            break;
        }
        result += arr[i];
    }
    return result;
};