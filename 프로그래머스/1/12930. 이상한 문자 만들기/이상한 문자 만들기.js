function solution(s) {
    const strings = s.split(' ')
    return strings.map(str => str.split('').map((char, i)=> i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ');
}