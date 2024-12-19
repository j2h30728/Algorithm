function solution(s, skip, index) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const filtered = alphabets.split('').filter(alpha => !skip.includes(alpha));
    let result = ''
    for(const char of s) {
        const newIndex = (filtered.indexOf(char) + index) % filtered.length;
        result += filtered[newIndex];
    }
    return result;
}