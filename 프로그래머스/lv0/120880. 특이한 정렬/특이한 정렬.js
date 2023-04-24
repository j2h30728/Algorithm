function solution(numlist, n) {
    return numlist.sort((a,b)=> Math.abs(a-n)- Math.abs(b-n) ||b-a)
}
// function solution(numlist, n) {
//     const arr = numlist.map(x=>[x, Math.abs(n-x)])
//     return arr.sort((a,b)=> {
//         if(a[1] < b[1]) return -1
//         if(a[1] === b[1]){
//             return a[0] < b[0] ? 1 : -1;
//         }
//     }).map(x=> x[0])
// }