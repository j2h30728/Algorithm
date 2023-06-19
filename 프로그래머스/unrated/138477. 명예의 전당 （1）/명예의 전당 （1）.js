function solution(k, score) {
    const newArray = [];
    const result =[];
    for(let i of score){
        newArray.push(i);
        newArray.sort((a,b)=>b-a).splice(k);
        result.push(newArray[newArray.length-1])
    }
    return result;
}