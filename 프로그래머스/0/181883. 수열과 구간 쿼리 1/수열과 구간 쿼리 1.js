function solution(arr, queries) {
    const result = arr.slice();
    queries.forEach(([a,b])=>{
        for(let i = a; i <= b; i++){
            result[i]++;
        }
    })
    return result;
}