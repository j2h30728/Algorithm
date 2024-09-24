const obj = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
}
const isRight = (s) => {
    const stack = [];
    const open = Object.values(obj);
    const close = Object.keys(obj);
    
    for(const char of s){
       if(open.includes(char)){
           stack.push(char);
       }else{
           if(stack?.at(-1) === obj[char]){
               stack.pop();
           }else{
               stack.push(char);
           }
       }
    }
    return stack.length === 0;
}

function solution(s) {
    let count = 0;
    let string = s;
    for(let i = 0; i < s.length; i++){
        if(isRight(string)){
            count++;
        }
        const arr = string.split('');
        const first = arr[0];
        const rest = arr.slice(1);
        string = [...rest,first].join('');
    }
    
    return count;
    
}