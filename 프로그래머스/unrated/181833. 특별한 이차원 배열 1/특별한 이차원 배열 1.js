function solution(n) {
    const item = Array.from({length:n}).fill([])    
   return item.reduce((acc,curr,idx)=>{
        const arr = Array.from({length:n}).fill(0)
        arr[idx] = 1
        return acc.concat([arr])
    },[])
}