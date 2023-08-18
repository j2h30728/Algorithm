function solution(babbling) {
    const arr = [ "aya", "ye", "woo", "ma"];
    let count = 0;
    for(const x of babbling){
        let word = "";
        let prev = "";
        for(const y of x){
            word += y;
        if(arr.indexOf(word) > -1){
            if(prev === word) break;
            prev = word;
            word = "";
        }}
        if(word.length === 0) count++;
    }
    return count;
}
