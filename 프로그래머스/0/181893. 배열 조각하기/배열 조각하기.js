function solution(arr, query) {
    query.forEach((x, i)=>{
        if(i % 2 === 0){
            arr.splice(x + 1);
        }else{
            arr.splice(0, x);
        }
    })
    return arr;
}