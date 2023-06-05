function solution(strings, n) {
    return strings.sort((a,b)=> {
        if(a.charCodeAt(n) === b.charCodeAt(n)) {
            return a > b ? 1 : -1;
        }
        return a.charCodeAt(n) - b.charCodeAt(n);
    })
}


// function solution(strings, n) {
//     return strings.sort((a,b) => {
//         if(a.charCodeAt(n) - b.charCodeAt(n) === 0) return a.charCodeAt(0) - b.charCodeAt(0);
//         return a.charCodeAt(n) - b.charCodeAt(n);
//         });
    
// }
