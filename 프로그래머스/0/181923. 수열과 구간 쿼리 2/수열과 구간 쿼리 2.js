function solution(arr, queries) {
    return queries.map(query=>{
        const [s, e, k] = query;
        const filtered = arr.filter((x, i)=> (s <= i && i <= e) && x > k)
        return filtered.length === 0 ? -1 : Math.min(...filtered);
        
    })
}