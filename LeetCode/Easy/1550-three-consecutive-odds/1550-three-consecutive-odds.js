/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    if(arr.length < 3) return false;

    let count = 0;
    for(let i = 0 ; i < 3; i++){
        if(arr[i] % 2 === 1){
            count++;
        }
    }
    for(let j = 3; j < arr.length; j++){
        if(arr[j] % 2 === 1){
            count++;
        }
        if(arr[j - 3] % 2 === 1){
            count--;
        }
        if(count === 3) return true;
    }
    return count >= 3
};