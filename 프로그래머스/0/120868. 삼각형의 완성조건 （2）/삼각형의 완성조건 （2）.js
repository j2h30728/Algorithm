function solution(sides) {
    let set = new Set()
    
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    for(let i = max - min + 1; i <= max; i++){
        set.add(i);
    }
    for(let i = max + 1; i < (max + min); i++){
        set.add(i);
    }
    return set.size;
}
