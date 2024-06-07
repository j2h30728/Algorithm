function solution(arr, queries) {
    queries.forEach((x,i)=>{
        const [s, e, k] = x;
        let index = s;
        while(index <= e){
            if(Number.isInteger(index / k)){
                arr[index] += 1;
            }
            index++;
        }
    })
    return arr;
}