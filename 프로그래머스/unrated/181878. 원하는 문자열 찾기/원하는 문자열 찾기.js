function solution(myString, pat) {
    if(myString.length < pat.length) return 0;
    const newStr = myString.toLowerCase();
    const newPat = pat.toLowerCase();
    for(let i = 0; i <= newStr.length - newPat.length ; i++){
        if(newStr.slice(i,newPat.length + i) === newPat){
            return 1;
        }
    }
    return 0;
}