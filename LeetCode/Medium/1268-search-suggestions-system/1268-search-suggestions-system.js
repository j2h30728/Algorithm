/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    const result = [];
    products.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    let word = '';
    for (let i = 0; i < searchWord.length; i++) {
        word = searchWord.slice(0, i + 1);
        const arr = products.filter(product => product.slice(0, i + 1) === word).slice(0, 3);
        result.push(arr);
    }
    return result;
};