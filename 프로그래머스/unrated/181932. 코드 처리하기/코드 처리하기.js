function solution(code) {
    let ret = "";
    let mode = 0;
    for(let idx =0; idx < code.length ; idx++){
        if(code[idx] === '1'){
            mode = (mode === 1) ? 0 : 1;
        }else if(mode === 0 && idx % 2 === 0) {
            ret += code[idx];
        }else if (mode === 1 && idx % 2 === 1) {
            ret += code[idx];
        }
    }
    return ret.length === 0 ? 'EMPTY' : ret;
}