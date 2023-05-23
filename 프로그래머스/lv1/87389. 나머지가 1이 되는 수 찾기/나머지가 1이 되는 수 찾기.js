function solution(n) {
    let num = 2;
    while(n > num){
        if(n % num === 1) return num;
        num++;
    }
}