function solution(answers) {
    const paterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    const scores = [0, 0, 0];
    answers.map((answer, i)=>{
        paterns.map((patern, j)=>{
            if(answer === patern[i % patern.length]){
                scores[j] += 1;
            }
        })
    })
    const max = Math.max(...scores);
    const result = [];
    for(let i = 0; i < scores.length; i++){
        if(max === scores[i]){
            result.push(i + 1);
        }
    }
    return result;
}