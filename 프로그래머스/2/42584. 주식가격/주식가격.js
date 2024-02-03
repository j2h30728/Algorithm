function solution(prices) {
    const answer = [];
    for(let i =0; i < prices.length; i++){
        for(let j = i; j < prices.length; j++){
            if(prices[i] > prices[j] || j === prices.length-1){
                answer.push(j-i);
                break;
            }
        }
    }
    return answer;
}