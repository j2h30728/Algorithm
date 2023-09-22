function solution(s) {
    let count = 0;
    const newS = s + s;
    for(let i=0; i<s.length; i++){
        if(check(s)) count++;
        const startString = s.slice(0,1)
        const endString = s.slice(1,s.length)
        s = endString+startString;
    }
    return count;
    return check(s)
}

const start = {
    ')' : '(',
    '}' : '{',
    ']' : '['
}
function check (string){
    const arr =[];
    for(const ch of string){
        if(start[ch] && arr.at(-1) === start[ch]){
            arr.pop();
        }else{
            arr.push(ch);
        }
    }
    return arr.length === 0;
}