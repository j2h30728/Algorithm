function solution(s){
    if(s.length % 2 ===1  || !s.includes("(") || !s.includes(")") ) return false;
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
    return arr.length === 0 ? true : false;
}
/*
function solution(s){
    if(s.length === 0) return false;
    let startCount = 0;
    for(let i =0; i < s.length ; i++){
     console.log(s.substring(i,i+1))   
        if(s.substring(i,i+1) === "("){
            startCount++;
        }
        if(s.substring(i,i+1) === ")"){
            if(startCount > 0){
                startCount--;
            }else {
                return false;
            }
        }
    }
    return startCount === 0 ? true : false;
*/