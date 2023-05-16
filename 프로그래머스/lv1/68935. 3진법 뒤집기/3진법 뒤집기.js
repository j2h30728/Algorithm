function solution(n) {
    const result = Array.from(n.toString(3)).reverse().join('');
    return parseInt(result,3)
}