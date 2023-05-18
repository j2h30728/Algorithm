function solution(d, budget) {
    let count = 0;
    const arr = d.sort((a,b)=>a-b);
    for(let i of arr){
        if(budget>= i){
            budget -= i;
            count++
        }else {
            break;
        }
    }
    return count;
}