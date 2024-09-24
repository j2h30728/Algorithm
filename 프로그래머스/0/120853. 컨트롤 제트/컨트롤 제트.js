function solution(s) {
    const result = [];
    s.split(' ').forEach(x => {
        if(x === 'Z'){
            result?.pop();
        }else{
            result.push(x);
        }
    })
    return result.reduce((acc,cur) => acc + +cur , 0);
}