function solution(numbers) {
    const en = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const num = ["0","1","2","3","4","5","6","7","8","9"];
    let intial = numbers;
    const answer = en.reduce((acc,curr,idx)=>{
        return acc.replaceAll(en[idx],num[idx])
    },intial)    
    return parseInt(answer);
}