function solution(arr, queries) {
    queries.forEach(([a,b])=>{
        while(a <= b){
            arr[a]++;
            a++
        }
    })
    return arr;
}