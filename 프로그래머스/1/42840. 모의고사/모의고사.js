function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
       
    const count = [0, 0, 0, 0]

    
    answers.forEach((answer, i) => {
        if(first[i % first.length] === answer){
            count[1] += 1;
        }
        if(second[i % second.length] === answer){
            count[2] += 1;
        }
        if(third[i % third.length] === answer){
            count[3] += 1;
        }
    })
    const max = Math.max(...count);
    const result = [];
    count.forEach((num, i) => {
        if(num === max){
            result.push(i);
        }
    })
    
    return result;
}