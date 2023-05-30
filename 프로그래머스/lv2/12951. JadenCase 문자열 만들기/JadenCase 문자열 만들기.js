function solution(s) {
    let answer = "";
    let preword = " ";
    for(let i of s){
        answer += preword === " " ? i.toUpperCase() : i.toLowerCase();
        preword = i;
    }
    return answer;
}
/*
function solution(s) {
    return s.split(' ').map(x=> {
        if(x === "") {
         return "";   
        }
        return x[0].toUpperCase() + x.slice(1).toLowerCase()
    }).join(' ')
}
*/