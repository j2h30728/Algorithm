/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const letter = new Array(26).fill(0); 

    for(const char of word){
        letter[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    letter.sort((a,b)=> b-a);
    let totalPresses = 0;

    for(let i = 0; i < 26; i++){
        if(letter[i] === 0) break;
        totalPresses += Math.floor( i / 8 + 1) * letter[i];
    }
    return totalPresses;
};