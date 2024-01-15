/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const result = [[], []]
    const winObj = {};
    const losObj = {};
    for (const [a, b] of matches) {
        winObj[a] = (winObj[a] || 0) + 1;
        losObj[b] = (losObj[b] || 0) + 1;
    }
    const winKeys = Object.keys(winObj);
    const losKeys = Object.keys(losObj);
    for (let i = 0; i < winKeys.length; i++) {
        if (winObj[winKeys[i]] && !losObj[winKeys[i]]) result[0].push(winKeys[i])
    }
    for (let i = 0; i < losKeys.length; i++) {
        if (losObj[losKeys[i]] === 1) result[1].push(losKeys[i])
    }
    return result;
};