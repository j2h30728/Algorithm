/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const path = [];

    function isPalindrome (start, end){
        while(start < end) {
            if(s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    }
    
    function backtrack(start){
        if(start === s.length) {
            result.push([...path]);
            return;
        }
        for(let i = start; i < s.length; i++){
            if(isPalindrome(start, i )){
                path.push(s.substring(start, i + 1));
                backtrack(i +1);
                path.pop();
            }
        }
    }
    backtrack(0);
    return result;
};