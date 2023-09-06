function solution(n, words) {
    let pre = words.at(0);
    const preArr = [words.at(0)];
    for(let i=1; i < words.length; i++){
        if(preArr.at(-1).at(-1) === words.at(i).at(0) && !preArr.includes(words.at(i))){
            preArr.push(words.at(i));
        }else {
            return [i%n+1 , Math.floor(i/n+1)]
        }
    }
    return [0,0]
}