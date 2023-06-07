function solution(num_list) {
    const [a,b] = [...num_list].reverse();
    return [...num_list, (a>b)? a-b : a *2];
}
// function solution(num_list) {
//     const length = num_list.length;
//     if(num_list[length-1] > num_list[length-2]){
//         return [...num_list , num_list[length-1] -num_list[length-2]];
//     }else{
//         return [...num_list, num_list[length-1]*2];
//     }
// }
