function solution(numbers) {
    const en = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let intial = numbers;
    const answer = en.reduce((acc,curr,idx)=>{
        return acc.replaceAll(curr,idx)
    },intial)    
    return parseInt(answer);
}