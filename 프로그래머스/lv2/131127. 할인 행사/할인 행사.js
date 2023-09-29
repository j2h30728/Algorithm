function solution(want, number, discount) {
    const totalNumber = number.reduce((acc,curr)=> acc+curr,0)
    let count = 0;
    
    for(let i =0; i <= discount.length -totalNumber;i++){
        let availableDays =0;
        const wantObj = {};
        for(let j=0; j < want.length ; j++){
            wantObj[want[j]] = number[j];
        }
        for(let j =0; j < totalNumber; j++){
            const product = discount[i+j];
            if(wantObj[product]){
                wantObj[product]--;
                availableDays++;
                if(wantObj[product] === 0) delete wantObj[product]
            }
        }
        if(Object.keys(wantObj) && availableDays === totalNumber){
            count++;
        }
    }
    return count;
}
