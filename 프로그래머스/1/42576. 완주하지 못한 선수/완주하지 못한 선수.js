function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach((name) => map.set(name, (map.get(name) || 0) + 1));
    completion.forEach((name) => map.set(name, (map.get(name) - 1)));
    
    return [...map].filter((person) => person[1] > 0).flat().at(0);
}