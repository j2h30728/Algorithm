function solution(picture, k) {
    const result = [];
    const rows = picture.map(x=>{
        let temp = '';
        for(const char of x){
            temp += char.repeat(k);
        }
        return temp;
    })
    rows.forEach(x=>{
        for(let i = 0; i < k; i++){
            result.push(x);
        }
    })
    return result;
}