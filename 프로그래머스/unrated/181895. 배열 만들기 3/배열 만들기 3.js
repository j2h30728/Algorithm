function solution(arr, intervals) {
    const [a,b] = intervals;
    let temp = [];
    for(let i = a[0]; i <= a[1]; i++){
        temp.push(arr[i])
    }
    for(let j = b[0]; j <= b[1]; j++){
        temp.push(arr[j])
    }
    return temp
}