function solution(participant, completion) {
    const obj = {};
    makeObj(completion, obj);
    
    for(str of participant){
        if(obj[str]){
            obj[str] -= 1;
        }else {
            return str;
        }
    }
}

function makeObj (arr,obj){
    for(i of arr){
        obj[i] = (obj[i] || 0) + 1;
    }
}