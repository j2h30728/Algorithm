function solution(s) {
    const obj = {}
    const newArray = new Array(s.length)
    for(let i =0 ; i < s.length ; i++){
        if(obj[s[i]] === undefined) {
            obj[s[i]] = i;
            newArray[i] = -1;
        }else{
            newArray[i] = i - obj[s[i]];
            obj[s[i]] = i;
        }
    }
    return newArray;
}