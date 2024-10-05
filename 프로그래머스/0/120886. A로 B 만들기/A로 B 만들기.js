function solution(before, after) {
    const beforeArr = [...before].sort();
    const afterArr = [...after].sort();
    for(let i = 0; i < beforeArr.length; i++){
        if(beforeArr[i] !== afterArr[i]){
            return 0;
        }
    }
    return 1;
}