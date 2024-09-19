function solution(emergency) {
    const obj = {};
    const arr = emergency.slice().sort((a,b) => b - a);
    arr.forEach((x,i) => obj[x] = i + 1);
    return emergency.map(x => obj[x]);
}