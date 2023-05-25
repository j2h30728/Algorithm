function solution(n) {
    const result = [];
    while(n / 10 > 0 ){
        result.push(n % 10);
        n = parseInt(n / 10);
    }
    return result;
}

// function solution(n) {
//     // return String(n).split('').reverse().map(x => parseInt(x))
//         // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10);
//         n = Math.floor(n/10);
//         console.log(n)
//     } while (n>0);

//     return arr;
// }
