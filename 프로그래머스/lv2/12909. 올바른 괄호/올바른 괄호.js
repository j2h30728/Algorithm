function solution(s){
    if(s.length % 2 ===1 ) return false;
    const arr = [];
    for(let i of s){
        if(i ===")"){
            if(arr[arr.length-1] === "("){
                arr.pop();
            }else{
                return false;
            }
        }
        if(i ==="("){
            arr.push(i);
        }
    }
    return !arr.length;
}