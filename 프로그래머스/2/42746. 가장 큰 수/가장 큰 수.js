function solution(numbers) {
    const strings = numbers.map(String).sort((a, b) => a + b > b + a ? -1 : a + b === b + a ? 0 : 1);
    
    if(strings[0] === '0') return '0';
    
    return strings.join('');
}