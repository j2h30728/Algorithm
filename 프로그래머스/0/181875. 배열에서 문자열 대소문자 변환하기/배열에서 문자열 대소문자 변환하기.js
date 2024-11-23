function solution(strArr) {
    return strArr.map((x,i) => i % 2 === 1 ? x.toUpperCase() : x.toLowerCase());
}