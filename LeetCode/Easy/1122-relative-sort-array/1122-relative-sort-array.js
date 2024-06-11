/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const arr = [];
    const obj = {};
    arr1.forEach((x)=>{
        obj[x] = (obj[x] || 0) + 1;
    })
    arr2.forEach((x)=>{
      const temp = (new Array(obj[x])).fill(x);
      arr.push(...temp);
      delete obj[x];
    })
    Object.entries(obj).forEach(([number, count])=>{
        const temp = (new Array(count)).fill(number);
        arr.push(...temp);
    })
    return arr;
};