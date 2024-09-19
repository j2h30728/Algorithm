function solution(age) {
    const A = 'a'.charCodeAt(0);
    const Z = 'z'.charCodeAt(0);
    
    return age.toString().split('').map(num => String.fromCharCode(Number(num) + A)).join('')
    
}