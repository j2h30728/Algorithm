function solution(s, n) {
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    let result = '';
    for(const char of s) {
        if(char === ' '){
            result += char;
        } else{
            const charCode = char.charCodeAt(0);
            let nextCharCode;
            if (char >= 'A' && char <= 'Z') {
                nextCharCode = (charCode - A + n) % 26 + A;
            } else if (char >= 'a' && char <= 'z') {
                nextCharCode = (charCode - a + n) % 26 + a;
            }
            result += String.fromCharCode(nextCharCode);
        }
    }
    return result;
}