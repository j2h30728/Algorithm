function solution(n) {
    return parseInt([...(n).toString(3)].reverse().join(''),3)
}

/*
function solution(n) {
    const result = Array.from(n.toString(3)).reverse().join('');
    return parseInt(result,3)
}
*/