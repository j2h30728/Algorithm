function solution(n) {
    return Math.floor( n / getGcd(n, 6));
}

function getGcd (num1, num2) {
    if(num1 < 0 || num2 < 0){
        return 0;
    }
    let temp;
    while(num2){
        temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    }
    return num1;
}