function solution(arr){
    let i =0;
    for(let j=1; j < arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return arr.slice(0,i+1);
}