/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const index = [];
    const result = [];

    for(let char of s){
        if(char === '('){
            index.push(result.length);
        }else if(char === ')'){
            const startIndex = index.pop();
            const subArray = result.slice(startIndex).reverse();
            result.splice(startIndex, subArray.length, ...subArray);
        }else{
            result.push(char);
        }
    }
    return result.join('');
};