function solution(n, lost, reserve) {
    const reserveObj = {};
    makeObj(reserve,reserveObj);
    let count = n;
    lost.sort();
    const filted =lost.filter(x=>{
        if(reserveObj[x]){
            countDown(x, reserveObj);
            return false;
        }
        return true;
    })
    
    filted.forEach(x=>{
        if(reserveObj[x-1]){
            countDown(x-1, reserveObj)
        } else if(reserveObj[x+1]){
            countDown(x+1, reserveObj)
        } else{
            count--;
        }
    })
    
    return count;
}

function makeObj (arr,obj) {
    arr.forEach(x=> {
        obj[x] = (obj[x] || 0) + 1;
    })
}
function countDown (x,obj){
    if(obj[x]) obj[x]--;
}