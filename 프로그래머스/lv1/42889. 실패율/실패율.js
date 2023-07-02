function solution(N, stages) {
    const arr = [];
    for(let i = 1 ; i <= N ; i++ ){
        let fail = 0;
        let total =0;
        stages.forEach((x,idx)=> {
            if(x >= i){
                total++;
            }
            if(x===i){
                fail++;
            }
        })
        arr.push([i,fail / total])

    }
    return arr.sort((a,b)=> b[1]-a[1]).map(x=>x[0]);
}