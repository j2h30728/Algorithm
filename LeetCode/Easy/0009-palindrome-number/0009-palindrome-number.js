/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string = String(x)
    for(let i = 0; i < string.length / 2; i++ ){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
};