function solution(arr) {
    const max = Math.max(arr.length,arr[0].length)
    if(max > arr.length){
        while(max > arr.length){
            arr.push(Array.from({length:max}).fill(0));
        }
    }
    if(max > arr[0].length){
        for(let i=0; i< arr.length ; i++){
            while(max > arr[i].length){
             arr[i].push(0);  
            }
        }
    }
    return arr
}