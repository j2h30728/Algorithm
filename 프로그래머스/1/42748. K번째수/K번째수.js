function solution(array, commands) {
    return commands.map(command => {
        const [start, end, pick] = command;
        return array.slice(start - 1, end).sort((a, b) => a- b)[pick - 1];
    })
    
}