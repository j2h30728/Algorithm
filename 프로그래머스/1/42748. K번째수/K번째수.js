function solution(array, commands) {
    const result = [];
    for(let index = 0; index < commands.length; index++){
        const [i,j,k] = commands[index]
        const slicedArray = array.slice(i - 1, j ).sort((a,b)=> a - b);
        
        result.push(slicedArray[k - 1]);
    }
    return result;
}