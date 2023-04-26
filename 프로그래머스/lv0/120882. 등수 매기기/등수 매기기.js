function solution(score) {
    let newArr= [];
    let rank =1;
    
    for(let i = 0; i< score.length; i++){
        for(let j=0; j<score.length ; j++){
            if(score[i][0]+score[i][1] < score[j][0]+score[j][1]){
                rank++
            }else if(score[i][0]+score[i][1] ===score[j][0]+score[j][1]){
                continue;
            }
        }
        newArr.push(rank);
        rank=1;
    }
    return newArr;
}