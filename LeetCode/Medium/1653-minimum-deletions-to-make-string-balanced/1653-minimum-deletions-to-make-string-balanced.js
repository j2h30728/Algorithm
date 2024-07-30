/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const n = s.length;
    const countA = new Array(n);
    const countB = new Array(n);
    let aCount = 0;
    let bCount = 0;

    for(let i = 0; i < n; i++){
        countB[i] = bCount;
        if(s.at(i) === 'b') bCount++;
    }

    for(let i = n; i >= 0; i--){
        countA[i] = aCount;
        if(s.at(i) === 'a') aCount++;
    }
    let minDeletions = n;
    for( let i = 0; i < n; i++){
        minDeletions = Math.min(minDeletions, countA.at(i) + countB.at(i))
    }

    return minDeletions;
};