function solution(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    if(length1 !== length2){
        return length2 > length1 ? -1 : 1;
    }
    const sum1 = arr1.reduce((acc, cur )=> acc+cur, 0);
    const sum2 = arr2.reduce((acc, cur )=> acc+cur, 0);
    
    return sum1 === sum2 ? 0 : sum2 > sum1 ? -1 : 1;
}