function solution(picture, k) {
    const result = [];
    picture.forEach(str=>{
        const row = [...str].reduce((acc,cur)=>acc + cur.repeat(k), '')
        
        for(let i = 0; i < k; i++) result.push(row);
    });
    return result;
}