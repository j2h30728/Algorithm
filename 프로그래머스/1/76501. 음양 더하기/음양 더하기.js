function solution(absolutes, signs) {
    return absolutes.map((num , i) => {
        const sign = signs[i] ? 1 : -1;
        return num * sign;
    }).reduce((acc, cur) => acc + cur, 0);
}