function solution(numer1, denom1, numer2, denom2) {
    const num = cal(denom1, denom2);
    
    const devision1 = Math.floor(num / denom1);
    const devision2 = Math.floor(num / denom2);
    
    const num2 = (numer1 * devision1 ) + (numer2 * devision2);
    const result = cal2(num, num2);
    return [Math.floor(num2 / result), Math.floor(num / result) ]
}

function cal (num1, num2) {
    if(num1 === 0 || num2 === 0 ) return 0;
    const upper = Math.max(num1, num2);
    let num = 1;
    while(true){
        const temp = upper * num;
        if(temp % num1 === 0 && temp % num2 === 0){
            return temp;
        } else{
            num++;
        }
    }
}

function cal2 (num1, num2) {
    let lower = Math.min(num1, num2);
    while(lower > 0){
        if(num1 % lower === 0 && num2 % lower === 0){
            return lower;
        }else{
            lower--;
        }
    }
    return 1;
}