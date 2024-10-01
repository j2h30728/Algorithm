function solution(spell, dic) {
    let result = 0
    dic.forEach(x => {
        let count = 0;
        const strArr = x.split('');
        spell.forEach((y, i) => {
            if(strArr.indexOf(y) > -1) count++
        })
        if(count === spell.length){
            result++;
        }
    })
    return result === 0 ? 2 : 1;
}