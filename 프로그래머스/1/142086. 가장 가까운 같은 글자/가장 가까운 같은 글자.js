function solution(s) {
    const result = [];
    for(let i = 0; i < s.length; i++ ){
        const index = s.substring(0, i).lastIndexOf(s[i]);
        if(index === -1) {
            result.push(index);
        }else{
            result.push(i - index);
        }
    }
    return result;
}