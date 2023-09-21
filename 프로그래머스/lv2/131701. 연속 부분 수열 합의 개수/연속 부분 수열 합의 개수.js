function solution(elements) {
    const set = new Set();    
    
    const extendedElements = elements.concat(elements)
    
    for(let start = 0; start < elements.length ; start++){
        let sum = 0;
        for(let end =start+1; end <= elements.length+start; end++ ){
            sum += extendedElements[end];
            set.add(sum);
        }
    }
    return set.size
}


