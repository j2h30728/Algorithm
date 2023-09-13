function solution(n) {
    let number=2;
    let jump=0;
    while(n >= 1){
        if((n % 2) !== 0){
            jump++;
            n--;
        }else{
            n = n / 2;
        }
    }
    return jump;
}