function solution(d, budget) {
    const answerList=[];
    const arr = d.sort((a,b)=>a-b).map(x=>{
        budget -= x;
        answerList.push(budget);
    })
    const filterd = answerList.filter(x=> x >= 0);
    return filterd.length;
}