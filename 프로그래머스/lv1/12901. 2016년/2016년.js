function solution(a, b) {
    const date = [31,29,31,30,31,30,31,31,30,31,30,31];
    const day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    const sumDate = date.reduce((acc,curr,idx)=>
                                idx < a-1 ? acc+curr : acc ,b) ;
    return day[sumDate % day.length ];
}