function solution(strings, n) {
    return strings.sort((a,b)=> {
        if(a.charCodeAt(n) === b.charCodeAt(n)) {
            return a > b ? 1 : -1;
        }
        return a.charCodeAt(n) - b.charCodeAt(n);
    })
}


