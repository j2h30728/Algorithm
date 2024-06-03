function solution(arr, queries) {
    queries.forEach(([a,b])=>{
      const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    })
    return arr;
}