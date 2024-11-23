function solution(myString) {
    return myString.split('').map(char => char === 'a' || char === 'A' ? char.toUpperCase() : char.toLowerCase()).join('');
}