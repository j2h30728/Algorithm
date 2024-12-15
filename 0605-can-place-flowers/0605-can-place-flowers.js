/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    flowerbed.forEach((x, i) => {
        const isEmptyLeftPlot = i === 0  || flowerbed.at(i - 1) === 0;
        const isEmptyRightPlot = flowerbed.at(i + 1) === 0 || i === flowerbed.length - 1;
        if(x === 0 && isEmptyLeftPlot && isEmptyRightPlot){
            count++;
            flowerbed[i] = 1;
        }
    })
    return count >= n;
};