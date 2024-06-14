function solution(arr, queries) {
    return queries.map(([s, e, k])=>{
        const filtered = arr.slice(s, e + 1).filter((x)=> x > k)
        return filtered.length === 0 ? -1 : Math.min(...filtered);
        
    })
}