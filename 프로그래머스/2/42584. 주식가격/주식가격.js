function solution(prices) {
    const length = prices.length;
    const answer = new Array(length).fill(0);
    
    const stack = [0];
    
    for(let i = 1; i < length; i++){
        while(stack.length > 0 && prices[stack.at(-1)] > prices[i] ){
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
        
    }
    stack.forEach(x => answer[x] = length - x - 1)
    return answer;
}