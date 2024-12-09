function solution(s){
    const arr = [];
    for(const char of s) {
        if(char === ')' && arr.length > 0 ) {
             arr.pop();
        }else{
            arr.push(char);
        }
    }
    return arr.length === 0;
}