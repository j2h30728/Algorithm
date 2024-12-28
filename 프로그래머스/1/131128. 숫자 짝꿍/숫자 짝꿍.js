function solution(X, Y) {
    const map = new Map();
    for(const char of X){
        map.set(char, (map.get(char) || 0) + 1);
    }
    const arr = [];
    for(const char of Y){
        if(map.get(char)){
            arr.push(char);
            map.set(char, map.get(char) - 1);
        }
    }
    if(arr.length === 0) return "-1";
    if(arr[0] === '0') return '0';
    
    return arr.sort((a,b) => b - a).join('');
}