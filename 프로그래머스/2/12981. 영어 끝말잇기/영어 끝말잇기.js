function solution(n, words) {
    const arr = [words[0]];
    
    for(const word of words.slice(1)) {
        if(arr.includes(word) ||  arr.at(-1).at(-1) !== word.at(0) ){
           return [ arr.length % n + 1 , Math.floor(arr.length / n) + 1 ];
        }
        arr.push(word);
    }
    return [0, 0];
}