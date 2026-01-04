/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const arr = [];
    for(const char of s) {
        if(vowels.includes(char)){
            arr.push(char)
        }
    }
    const result = [];
    for(const char of s) {
        if(vowels.includes(char)){
            const vowel = arr.pop();
            result.push(vowel);
        } else{
            result.push(char);
        }
    }    
    return result.join('');
};