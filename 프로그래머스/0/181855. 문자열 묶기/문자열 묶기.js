function solution(strArr) {
    const obj = {};
    strArr.forEach((str)=>{
        const length = str.length;
        obj[length] = (obj[length] ?? 0) + 1;
    })
    return Object.values(obj).sort((a,b)=>b-a).at(0);
}