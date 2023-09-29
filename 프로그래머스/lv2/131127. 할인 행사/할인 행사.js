function solution(want, number, discount) {
    const totalNumber = number.reduce((acc,curr)=> acc+curr,0)
    let count = 0;
    const wantObj = {};
    for(let j=0; j < want.length ; j++){
        wantObj[want[j]] = number[j];
    }
    for(let i =0; i < discount.length -totalNumber+1;i++){
        const newArr = discount.slice(i,totalNumber+i);
        const newObj = {...wantObj};
        for(let k=0; k < newArr.length; k++){
            if(newObj[newArr[k]]){
                newObj[newArr[k]] -= 1;
                if(k === newArr.length-1) count++;
            }else {
                break;
            }
        }
    }
    return count;
}
