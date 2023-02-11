function solution(numbers) {
    const answer = (numbers.reduce((acc,cur)=> acc+cur))/numbers.length
    
    return answer;
}