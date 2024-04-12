/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let right = 0, left = 0;
    let current = 0;
    let max = 0;

    while (right < s.length) {
        if (vowels.has(s[right])) {
            current++;
        }
        if (right - left + 1 > k) {
            if (vowels.has(s[left])) {
                current--;
            }
            left++;
        }
        max = Math.max(max, current);
        right++;
    }
    return max;
};