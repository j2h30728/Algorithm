function solution(emergency) {
    const arr = emergency.slice().sort((a,b) => b - a);
    return emergency.map(x => arr.indexOf(x) + 1);
}