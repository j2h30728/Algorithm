function solution(babbling) {
    const arr = [ "aya", "ye", "woo", "ma" ]
    let count = 0;
    for(let str of babbling){
        arr.forEach(x => str = str.replace(x, ' '));
        if(str.trim().length === 0) count++;
    }
    return count;
}