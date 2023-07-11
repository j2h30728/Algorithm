function solution(X, Y) {
    let answer = "";
    const xObj = {};
    const yObj ={};
    
    makeObject(X,xObj);
    makeObject(Y,yObj);
    
    for(let i = 9 ; i >= 0; i--){
        const count = Math.min(xObj[i],yObj[i])
        if(!isNaN(count)){
            answer += (i+"").repeat(count)
        }
    }
    if(!answer) return '-1';
    if(answer[0] === '0') return '0';
    return answer;
}
function makeObject (str,obj) {
    for(const x of str){
        obj[x] = (obj[x] || 0) + 1;
    }
}

