function solution(k, tangerine) {
    const obj = {};
    tangerine.forEach(x=> makeObj(obj,x))
    const newArr = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
    
    let index= 0;
    while(k > 0){
        k -= newArr[index][1];
        index++;
    }
    return index;
}

function makeObj (obj,x) {
    return obj[x] = (obj[x] || 0 ) + 1
}