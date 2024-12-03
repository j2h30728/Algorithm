function solution(k, score) {
    const winner = [];
    const result = [];
    score.forEach(x => {
        if(winner.length < k){
            winner.push(x)
            winner.sort((a, b) => b - a);
        } else{
            if(x > winner.at(-1)){
                winner.pop();
                winner.push(x);
                winner.sort((a, b) => b - a);
            }
        }
        result.push(winner.at(-1));
    })
    return result;
}