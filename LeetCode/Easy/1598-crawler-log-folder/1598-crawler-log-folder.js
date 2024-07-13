/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = [];
    const backLink = '../'
    const currentLink = './'

    logs.forEach((log)=>{
        switch(log){
            case backLink:
                stack.pop();
                break;
            case currentLink || stack.at(-1) === log:
                break;
            default:
                stack.push(log)
        }
    }) 
    return stack.length;
};