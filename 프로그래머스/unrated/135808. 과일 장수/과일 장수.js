function solution(k, m, score) {
    const newArray =[];
    score.sort((a,b)=>b-a);
    for(let i = 1 ; i < score.length ; i++){
        if((i+1) % m === 0) newArray.push(score[i]);
    }
    return newArray.reduce((acc,curr)=>acc + curr * m ,0);
}

/*
function solution(k, m, score) {
    const newArray = [];
    score.sort((a,b)=>b-a)
    while(score.length >= m){
        newArray.push(score.splice(0,m));
    }
    return newArray.reduce((acc,curr)=>acc + curr[m-1] * m ,0);
}
*/