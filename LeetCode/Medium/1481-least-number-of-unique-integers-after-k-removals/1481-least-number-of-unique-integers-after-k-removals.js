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
    let uniqueNumber = newArray.length;
    for (let count of newArray) {
        if (k >= count) {
            k -= count;
            uniqueNumber--;
        } else {
            break;
        }
    }
    return uniqueNumber;
};