/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return '';
    
    const temp =  getGcd(str1.length , str2.length);
    return str1.slice(0,temp);
};
function getGcd (a, b){
    return b === 0 ? a : getGcd(b, a % b);
}