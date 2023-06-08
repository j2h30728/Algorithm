function solution(arr, n) {
    return arr.map((x,i)=>{
        return (arr.length % 2 === 0) ? (i % 2=== 1)  ? n+x : x :  (i % 2=== 0)  ? n+x : x;
    })
    
}