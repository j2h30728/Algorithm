/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    return s.split(' ').filter(x => x).at(-1).length;
};