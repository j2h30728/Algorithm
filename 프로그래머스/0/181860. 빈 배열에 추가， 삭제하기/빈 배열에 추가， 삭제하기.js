function solution(arr, flag) {
    const result = [];
    flag.forEach((x,i)=>{
        if(x){
            result.push(...Array.from({length : arr[i] * 2 }, ()=> arr[i]));
        }else{
            result.splice(-arr[i])
        }
    })
    return result;
}