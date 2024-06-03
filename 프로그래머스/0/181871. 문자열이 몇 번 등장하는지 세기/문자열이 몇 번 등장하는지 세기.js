function solution(myString, pat) {
    let startIndex = 0;
    let count = 0;
    let loop = 0;
    while(loop !== -1){
        loop = myString.indexOf(pat, startIndex);
        startIndex = loop + 1;
        if(loop !== -1) count++;
    }
    return count;
}