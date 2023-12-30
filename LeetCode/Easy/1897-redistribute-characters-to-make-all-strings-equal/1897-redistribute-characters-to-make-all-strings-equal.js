/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const obj = {};
    words.forEach(str => {
        for (const char of str) {
            obj[char] = (obj[char] || 0) + 1;
        }
    })
    const values = Object.values(obj)
    for (const value of values) {
        if (value % words.length !== 0) {
            return false;
        }
    }
    return true;
};