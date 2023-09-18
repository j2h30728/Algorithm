function solution(arr) {
    let max = Math.max(...arr);
    let isDevide=false;
    while(!isDevide){
        if(arr.some(x=>max % x !== 0)){
            max++;
        }else{
            isDevide = true;
        }
    }
    return max;
}