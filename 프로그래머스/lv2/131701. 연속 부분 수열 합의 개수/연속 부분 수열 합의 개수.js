function solution(elements) {
    const set = new Set();    
    
    const extendsElements = elements.concat(elements)
    
    for(let i = 0; i < elements.length ; i++){
        for(let j =i+1; j <= elements.length+i; j++ ){
            const temp = extendsElements.slice(i,j)
            set.add(temp.reduce((acc,curr)=> acc+curr,0))
        }
    }
    return set.size
}


