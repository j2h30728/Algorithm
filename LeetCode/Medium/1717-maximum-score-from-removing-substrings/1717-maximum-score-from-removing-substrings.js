/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    const highScoreString = x >= y ? 'ab' : 'ba';
    const lowScoreString = x >= y ? 'ba' : 'ab';
    const highScore = Math.max(x, y);
    const lowScore = Math.min(x, y);
    

    const removeSubString  = (s , target) => {
        const stack = [];
        let score = 0;
        for(const char of s){
            if(stack.length > 0 && (stack.at(-1) + char === target)) {
                stack.pop();
                score += target === highScoreString ? highScore : lowScore;
            }else {
                stack.push(char);
            }
        }
        return { remainString : stack.join(''), score};
    }
    const {remainString, score } = removeSubString(s, highScoreString);
    const result = removeSubString(remainString, lowScoreString);

    return result.score + score;
};