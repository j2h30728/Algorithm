function solution(arr) {
    let max = Math.max(...arr);
    const originalMax = max;
    let isDevide=false;
    while(!isDevide){
        if(arr.some(x=>max % x !== 0)){
            max += originalMax;
        }else{
            isDevide = true;
        }
    }
    return max;
}