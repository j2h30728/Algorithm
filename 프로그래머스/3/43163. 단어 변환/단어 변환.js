function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    const queue = [[begin, 0]];
    const visited = new Set();
    
    while(queue.length > 0 ){
        const [currentWord, count] = queue.shift();
        if(currentWord === target) return count;
        
        words.forEach(word =>{
            let diff = 0;
            if(!visited.has(word)){
                for(let i = 0; i < word.length; i++){
                    if(currentWord[i] !== word[i]) diff++;
                }
                if(diff === 1){
                    queue.push([word, count + 1]);
                    visited.add(word);
                }
            }
        })
    }
    return 0;
}