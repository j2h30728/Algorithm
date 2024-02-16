/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const obj = {};
    arr.forEach(x => {
        obj[x] = (obj[x] || 0) + 1;
    })
    const newArray = Object.values(obj).sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
        if (newArray[0] - 1 === 0) {
            newArray.shift();
        } else {
            newArray[0]--;
        }
    }
    return newArray.length;
};