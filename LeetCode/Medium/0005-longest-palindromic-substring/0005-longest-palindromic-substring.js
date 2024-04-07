/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let left = '', right = ''
    const check = (i, j) => {
        left = i;
        right = j;

        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    for (let length = s.length; length > 0; length--) {
        for (let start = 0; start <= s.length - length; start++) {
            if (check(start, start + length)) {
                return s.substring(start, length + start + 1)
            }
        }
    }
    return s[0];
};