function solution(strArr) {
    const obj = {};
    strArr.forEach((str)=>{
        const length = str.length;
        obj[length] = (obj[length] ?? 0) + 1;
    })
    return Math.max(...Object.values(obj));
}