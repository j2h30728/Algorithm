function solution(n) {
    let num = 0
    for(let i =0; i < n ; i++){
        num++
        while((num % 3 ===0) || (num+'').includes('3')){
            num++;
        } 
    }
    return num;
}

