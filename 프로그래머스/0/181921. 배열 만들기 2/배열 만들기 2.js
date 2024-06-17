function solution(l, r) {
    const arr = [];
    for(let i = l; i <= r; i++){
        const replacedEmptyString = String(i).replace(/['5','0']/g,'')
        if(replacedEmptyString === ''){
            arr.push(i);
        }
    }
    return arr.length === 0 ? [-1] : arr;
}