function solution(s) {
    const numArr = s.split(' ').map(x=>parseInt(x));
    return `${Math.min(...numArr)} ${Math.max(...numArr)}`
}
/*
function solution(s) {
    const numArr = s.split(' ').map(x=>parseInt(x)).sort((a,b)=>a-b)
    return `${numArr[0]} ${numArr[numArr.length - 1]}`
}
*/