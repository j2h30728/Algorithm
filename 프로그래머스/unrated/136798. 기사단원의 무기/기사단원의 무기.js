function solution(number, limit, power) {
    const measure = [];
    for(let i = 1; i <= number; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(i) ; j++){
            if(i % j === 0){
                count += 2;
            }
        }
        if(Number.isInteger(Math.sqrt(i))){
            count--;
        }
        measure.push(count);
   }
    return measure.map(x=> (x>limit) ? power : x).reduce((acc,curr)=> acc+curr,0)
}