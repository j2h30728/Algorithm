function solution(array, commands) {
    return commands.map((x)=> {
        const [start, end,idx] = x;
        const newArray = array.slice(start-1,end).sort((a,b)=>a-b);
        return newArray.length > idx ? newArray[idx-1] : newArray[newArray.length-1]
    })
}