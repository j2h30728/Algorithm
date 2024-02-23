function solution(priorities, location) {
    const arr = priorities.map((x,i) => ({value:x, index:i}));
    let count = 0;
    
    while(arr.length > 0) {
        const current = arr.shift();
        if(arr.some((x=> x.value  > current.value))){
            arr.push(current);
        } else {
            count++;
            if(current.index == location) return count;
        }

    }
    return count;
}