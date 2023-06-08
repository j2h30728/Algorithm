function solution(arr, n) {
    return arr.map((x,i)=>
        arr.length % 2 !== i % 2 ?
                   x + n :
                   x
    )
    
}

// function solution(arr, n) {
//     if(arr.length % 2 === 1){
//         return arr.map((x,i)=>{
//             if(i % 2 === 0){
//               return  n + x;
//             }
//             return x;
//         })
//     }else{
//         return arr.map((x,i)=>{
//             if(i % 2 === 1){
//               return  n + x;
//             }
//             return x;
//         })
//     }
    
// }