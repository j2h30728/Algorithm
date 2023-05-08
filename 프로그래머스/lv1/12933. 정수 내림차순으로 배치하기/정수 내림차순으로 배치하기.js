function solution(n) {
    
    const nums=[];
    do{
        nums.push(n%10)
        n = Math.floor(n/10);
    }while(n>0)
        
    return nums.sort((a,b)=>b-a).join('') * 1;
    
     //return +Array.from(n+"").sort((a,b)=>b-a).join('')
}