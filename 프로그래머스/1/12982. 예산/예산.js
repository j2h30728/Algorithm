function solution(d, budget) {
    let count = 0;
    let temp = 0;
    
    for(const x of d.sort((a,b) => a-b)){
     if(x + temp > budget){
            return count;
        } else{
            count++;
            temp += x;
        }   
    }
    return count;
}