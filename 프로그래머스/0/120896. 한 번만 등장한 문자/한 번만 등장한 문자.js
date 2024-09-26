function solution(s) {
    const map = new Map();
    for(const char of s){
        map.set(char, (map.get(char) || 0) + 1);
    }
    const result = [...map].filter(x => x[1] === 1).sort((a, b) => a[0] < b[0] ? -1 : 1).map(x => x[0]).join('');
    return result.length === 0 ? '' : result;
}