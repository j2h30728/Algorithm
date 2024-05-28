const obj = {
    '1' : 'w',
    '-1' : 's',
    '10' : 'd',
    '-10' : 'a',
}
function solution(numLog) {
    let result = ''
    for(let i = 1; i < numLog.length; i++){
        const key = numLog[i] - numLog[i-1];
        result += obj[key];
    }
    return result;
}