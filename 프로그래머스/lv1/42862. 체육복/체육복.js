function solution(n, lost, reserve) {
    const reserveObj = {};
    const fileteredReserve = reserve.filter(x=> !lost.includes(x))
    const filteredLost = lost.filter(x=>!reserve.includes(x))
    
    makeObj(fileteredReserve,reserveObj);
    let count = n;
    filteredLost.sort((a,b)=>a-b);
    
    filteredLost.forEach(x=>{
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