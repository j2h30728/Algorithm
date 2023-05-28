function solution(my_string, target) {
    return my_string.includes(target) ? 1 : 0;
}

// function solution(my_string, target) {
//     for(let i = 0 ; i < my_string.length - target.length +1; i++){
//         if(my_string.slice(i, i+target.length) === target){
//             return 1;
//         }
//     }
//     return 0;
// }