function solution(absolutes, signs) {
    const newSigns = signs.map(x=> x === true ? 1 : -1)
    return absolutes.reduce((acc,curr,idx)=> acc += curr * newSigns[idx],0)
    
    // const newSigns = signs.map(x=> x === true ? 1 : -1)
    // let sum =0;
    // absolutes.forEach((x,idx)=> {
    //     sum += x * newSigns[idx]
    // })
    // return sum;
}