function solution(s) {
    let result = [];
    for(const char of s){
        if(s.indexOf(char) === s.lastIndexOf(char)) result.push(char);
    }
    return result.sort().join('');
}