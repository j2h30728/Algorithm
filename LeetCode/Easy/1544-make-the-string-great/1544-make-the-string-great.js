/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const arr = [];
    for (const char of s) {
        if (arr?.at(-1) !== char && arr?.at(-1)?.toLowerCase() === char.toLowerCase()) {
            arr.pop();
        } else {
            arr.push(char);
        }
    }
    return arr.join('');
};