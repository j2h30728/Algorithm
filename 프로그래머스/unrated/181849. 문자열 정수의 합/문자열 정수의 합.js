function solution(num_str) {
    let result = 0;
    for(let i =0; i < num_str.length ; i++){
        result += parseInt(num_str[i]);
    }
    return result;
}


// function solution(num_str) {
//     let result =0;
//     let num =parseInt(num_str);
//     while(num > 0){
//         result += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return result;
// }