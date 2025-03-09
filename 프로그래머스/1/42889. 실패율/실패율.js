function solution(N, stages) {
    let people = stages.length;
    const numbers = new Array(N + 1).fill(0);

    stages.forEach(stage => {
        numbers[stage] += 1;
    })
    
    const result = [0];
    
    numbers.slice(1).forEach(num => {
        result.push(num / people);
        people -= num;
    })
    
    return result.map((num,i) => ([i,num])).slice(1).sort((a, b) => b[1] - a[1]).flatMap(num => num[0]).filter(num => num <= N)
    
}