/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let i = 0;
    while(result.length < word1.length + word2.length){
        result += word1[i] ?? '';
        result += word2[i] ?? '';
        i++;
    }
    return result;
};