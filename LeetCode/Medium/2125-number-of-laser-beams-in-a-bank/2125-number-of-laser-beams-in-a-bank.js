/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    const newBank = bank.filter(x => x.includes('1')).map(x => x.split('').filter(x => x === '1').length);
    if (newBank.lenth < 2) return 0;
    let sum = 0;
    for (let i = 0; i < newBank.length - 1; i++) {
        sum += newBank[i] * newBank[i+1];
    }
    return sum;
};