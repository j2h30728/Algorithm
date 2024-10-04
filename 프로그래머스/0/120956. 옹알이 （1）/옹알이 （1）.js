function solution(babbling) {
    const set = new Set([ "aya", "ye", "woo", "ma" ]);
    let count = 0;
    for(const string of babbling){
        let pre = '';
        let store = '';
        for(const char of string){
            pre += char;
            
            if(set.has(pre)){
                store += pre;
                pre = '';
            }
        }
        if(string === store) count++;
    }
    return count;
}