function solution(n) {
    let result = 0;
    for(let i = 1; i <= n; i++){
        if(isCal(i)){
            result++;
        }
    }
    return result;
}

function isCal (num){
    let count = 0;
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            count++;
        }
        if(count === 3){
            return true;
        }

    }
    return false;
}