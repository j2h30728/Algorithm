function solution(s) {
    const regExp = /^[+-]?[1-9]\d{0,4}$/;
    if(regExp.test(s)){
        return s.match(regExp)[0] * 1;
    }
    return Number(s);
}