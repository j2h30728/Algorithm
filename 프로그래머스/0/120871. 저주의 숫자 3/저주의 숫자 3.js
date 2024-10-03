function solution(n) {
    const arr = []
    
    let num = 0;
    
    while(arr.length < n){
        num++;
        if(num % 3 === 0 || String(num).includes('3')){
            continue;
        }else{
            arr.push(num);
        }
    }
    return num;
}