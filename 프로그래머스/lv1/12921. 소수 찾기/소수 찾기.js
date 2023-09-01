function solution(n) {
    const newArr = Array(n+1).fill(true).fill(false,0,2);
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(newArr[i]){
            for(let j = i*i; j <= n; j+=i){
                newArr[j] = false;
            }
        }
    }
    return newArr.filter(x=>x).length;
}