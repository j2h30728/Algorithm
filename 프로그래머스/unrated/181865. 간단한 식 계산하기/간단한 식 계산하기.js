function solution(binomial) {
    const [a,operator,c] = binomial.split(' ');
    if(operator === "+"){
        return +a + +c;
    }
    if(operator === "-"){
        return +a - +c;
    }
    if(operator === "*"){
        return +a * +c;
    }
}