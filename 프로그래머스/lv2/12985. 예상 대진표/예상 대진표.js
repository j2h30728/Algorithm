function solution(n,a,b) {
    // 4 , 7
    // 나누기 2 한 것이 세트로 붙게되는 경우(다음라운드의 몇번째인지)
    // n Math.ceil(a/2) MAth.ceil(b/2)
    // n/2
    let count = 0;
    while(Math.abs(a-b) >= 1){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        count++;
    }
    
    return count
}