function solution(s) {
    const result = [];
    let count = 0;
    for(const char of s){
        if(result.at(-1) === char){
            result.pop();
            count++;
        }else{
            result.push(char);
        }
    }
    return result.length ? 0 : 1;
}