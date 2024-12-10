function solution(priorities, location) {
    const arr = priorities.map((x, i) => ({ value : x, index : i}));
    let count = 0;
    while(arr.length > 0) {
        if(arr.slice(1).some(x => arr[0].value < x.value)){
            const temp = arr.shift()
            arr.push(temp);
        }else{
            const temp = arr.shift();
            count++;
            if(temp.index === location){
                return count;
            }
        }
        
    }
    return count;
}