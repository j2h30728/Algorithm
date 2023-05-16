function solution(arr){
    const result = [];
   for(let i=0; i < arr.length ; i++){
       if(arr[i] !== arr[i+1]){
           result.push(arr[i]);
       }
   }
    return result;
}
// function solution(arr){
//     let i =0;
//     for(let j=1; j < arr.length;j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return arr.slice(0,i+1);
// }