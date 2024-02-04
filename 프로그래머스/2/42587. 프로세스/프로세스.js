function solution(priorities, location) {
    let count = 1;
    while(priorities.length > 0){
        if(priorities[0] === Math.max(...priorities)){
            priorities.shift();
            if(location === 0){
                return count;
            }else{
                count++;
                location--;
            }
        }else{
            const num = priorities.shift();
            priorities.push(num);
            if(location === 0){
                location = priorities.length -1;
            }else{
                location--;
            }
        }
        
    }
    return count;
}