function solution(number, k) {
    const stack = [];
    let removed = 0;
    
    for(const num of number){
        while(stack.length > 0 && stack.at(-1) < num && removed < k){
            stack.pop();
            removed++;
        }
        stack.push(num);
    }
    while(removed < k){
        stack.pop();
        removed++;
    }
    
    return stack.join('')
}