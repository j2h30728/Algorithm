/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let end = minutes;
    let defaultSum = customers.reduce((acc,cur,idx)=> grumpy[idx] === 0 ? acc + cur : acc, 0);
    for(let i = 0; i < minutes; i++){
        if(grumpy[i] === 1) defaultSum += customers[i];
    }
    let max = defaultSum;
    for(let i = minutes; i < customers.length; i++){
        if(grumpy[i] === 1){
            defaultSum += customers[i];
        }
        if(grumpy[i - minutes] === 1){
            defaultSum -= customers[i - minutes];
        }
        max = Math.max(max, defaultSum);
    }
    return max;
};