function solution(a, b) {
    // let x = a;
    let y= 0;
    for(let i =1; i <= Math.min(a,b); i++){
        if(a%i ===0 && b%i ===0 ) {
            // x = x/i;
            // y = y/i;
            y=i;
        }
    }
    let c = b/y;
    let num = 2
    const arr = [];
    while(num <= c){
        if(c % num === 0) {                        
            c = c/num;
            arr.push(num)

        } else{
            num++;
        }
    }
    return arr.filter(x=> x !== 2 && x !== 5).length > 0 ? 2 : 1;
}