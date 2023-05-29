function solution(s) {
    return s.split(' ').map(x=> {
        if(x === "") return;
        return x[0].toUpperCase() + x?.slice(1).toLowerCase()
    }).join(' ')
}
/*
function solution(s) {
    return s.split(' ').map(x=> {
        const newStr = x.slice(1).toLowerCase();
        if(!!isNaN(parseInt(x[0]))){
            return x[0].toUpperCase() + newStr;
        }
        return x[0] + newStr;
    }).join(' ');
}
*/