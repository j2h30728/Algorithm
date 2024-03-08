/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
    price.sort((a, b) => a - b);
    let start = 0;
    let end = price[price.length - 1] - price[0];
    let result = 0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (check(price, k, mid)) {
            result = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
};


function check(price, k, mid) {
    let count = 1;
    let selected = price[0];

    for (let i = 1; i < price.length; i++) {
        if (price[i] - selected >= mid) {
            count++;
            selected = price[i];
        }
        if (count >= k) return true;
    }
    return false;
}