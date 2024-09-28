function solution(n, words) {
    const useWords = new Set();
    let preWord = words[0][0];
    
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        
        if(useWords.has(word) || word[0] !== preWord){
            return [i % n + 1, Math.floor(i / n) + 1];
        }
        useWords.add(word);
        preWord = word.slice(-1);
    }
    return [0, 0]
}