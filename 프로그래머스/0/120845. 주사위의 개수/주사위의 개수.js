function solution(box, n) {
    return box.reduce((acc, cur)=> Math.floor(cur / n) * acc , 1);
}