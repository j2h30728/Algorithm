const isPrime = (num) => {
    if(num < 2 ) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const set = new Set();
    const used = new Array(numbers.length).fill(false);
    
    function dfs (current) {
        if(current.length > 0 && isPrime(Number(current))){
            set.add(Number(current));
        }
        
        for (let i = 0; i < numbers.length; i++){
            if(!used[i]){
                used[i] = true;
                dfs(current + numbers[i]);
                used[i] = false;
            }
        }
    }
    
    dfs('');
    return set.size;
}



