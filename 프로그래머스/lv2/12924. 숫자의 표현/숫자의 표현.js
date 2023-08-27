function solution(n) {
    let count = 0;
    for(let i = n; i > 0; i--){
        count += helper(i,n);
    }
    return count;
}

function helper(num,n){
    let count = 0;
    let amount = 0;
    while(amount < n){
        if(num === 0) return count;
        amount += num;
        num--;
        if(amount === n)count++;
    }
    return count;    
}