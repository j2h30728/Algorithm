function solution(food) {
    const count = food.map(f => Math.floor(f / 2));
    let resultArr = [];
    for(let i = 1; i < count.length; i++) {
        for(let j = 0; j < count[i]; j++){
            resultArr.push(i);
        }
    }
    const reverseArr = resultArr.slice().reverse()
    
    return [...resultArr, 0, ...reverseArr].join('');
}