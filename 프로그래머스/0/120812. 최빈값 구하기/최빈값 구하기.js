function solution(array) {
    const obj = {};
    array.forEach(x => obj[x] = (obj[x] || 0) + 1);
    const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    const value = Object.values(obj).sort((a, b) => b - a);
    
    const mostCount = value.at(0)
    if(value.indexOf(mostCount) !== value.lastIndexOf(mostCount)){
        return -1;
    }
    return Number(arr[0][0]);
}