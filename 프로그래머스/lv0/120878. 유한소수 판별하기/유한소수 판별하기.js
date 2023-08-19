function solution(a, b) {
    let y= 0;
    for(let i =1; i <= Math.min(a,b); i++){
        if(a%i ===0 && b%i ===0 ) y=i;
    }
    let c = b/y;
    while(c%2===0){c = c/2}
    while(c%5===0){c = c/5}
    return c !== 1 ? 2 : 1; 
}

// function solution(a, b) {
//     let y= 0;
//     for(let i =1; i <= Math.min(a,b); i++){
//         if(a%i ===0 && b%i ===0 ) y=i;
//     }
//     let c = b/y;
//     let num = 2
//     const arr = [];
//     while(num <= c){
//         if(c % num === 0) {                        
//             c = c/num;
//             arr.push(num)

//         } else{
//             num++;
//         }
//     }
//     return arr.filter(x=> x !== 2 && x !== 5).length > 0 ? 2 : 1;
// }