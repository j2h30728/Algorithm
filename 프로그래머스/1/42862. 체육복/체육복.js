function solution(n, lost, reserve) {
    const realLost = lost.filter(x=> !reserve.includes(x)).sort((a,b)=>a-b);
    const realReserve = reserve.filter(x=> !lost.includes(x)).sort((a,b)=>a-b);
    
    let result = n - realLost.length;
    
    realLost.forEach((lostStudent)=>{
        const index = realReserve.findIndex(x => Math.abs(x - lostStudent) === 1);
        
        if(index !== -1){
            result++;
            realReserve.splice(index,1);
        }
    })
    
    return result;
}