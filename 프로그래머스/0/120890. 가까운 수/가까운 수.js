function solution(array, n) {
    let min = array[0];
    for(const num of array){
        if(Math.abs(n - num) === Math.abs(n - min)){
            min = Math.min(num, min);
            continue;
        }
        min = Math.abs(n - num) < Math.abs(n - min) ? num : min;
    }
    return min;
}