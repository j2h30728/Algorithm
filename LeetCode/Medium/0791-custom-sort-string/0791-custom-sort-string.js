/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const included = [];
    const least = [];

    for(const str of s){
        if(order.includes(str)){
            const index = order.indexOf(str);
            included.push([index,str])
        }else{
            least.push(str);
        }
    }
    const ordredString = included.sort((a,b)=> a[0]-b[0]).map(x=>x[1]).join('');
    const leastString = least.join('');

    return ordredString + leastString;
};