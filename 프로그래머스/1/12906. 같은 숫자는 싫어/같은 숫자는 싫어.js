function solution(arr) {
    const result = [];
    let prev;
    for(const num of arr) {
        if(prev !== num){
            result.push(num);
        } 
        prev = num;
    }
    return result;
}