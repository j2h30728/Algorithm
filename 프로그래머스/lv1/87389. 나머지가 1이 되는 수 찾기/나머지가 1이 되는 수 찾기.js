function solution(n) {
    let num =2;
    while(n > num){
        if(n % num === 1){
            return num;
        }
        num++;
    }
}

// function solution(n) {
//     for(let i =2 ; i < n; i++){
//         if(n % i === 1) return i;
//     }
// }