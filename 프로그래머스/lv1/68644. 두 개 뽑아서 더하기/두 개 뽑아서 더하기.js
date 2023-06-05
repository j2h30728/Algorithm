function solution(numbers) {
    const obj = {}
    for(let i = 0; i < numbers.length ; i++){
        for(let j = i+1 ; j < numbers.length; j++){
            obj[numbers[i]+numbers[j]] = obj[numbers[i]+numbers[i]] || 0;
        }
    }
    return Object.keys(obj).map(x=>parseInt(x));
}