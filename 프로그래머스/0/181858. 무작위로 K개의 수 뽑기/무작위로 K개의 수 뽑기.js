function solution(arr, k) {
    const set = new Set();
    for(let num of arr){
        if(set.size == k) break;
        
        if(!set.has(num)) set.add(num);
    }
    const newArray = Array.from(set);
    return Array.from({length : k},(_,i)=> newArray[i] ?? -1);
}