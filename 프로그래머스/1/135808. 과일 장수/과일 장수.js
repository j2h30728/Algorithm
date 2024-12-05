function solution(k, m, score) {
    const min = score.sort((a, b) => b - a);
    const total = score.length;
    let result = 0;
    let index = m - 1;
    while(index < total){
        result += score.at(index) * m;
        index += m;
    }
    return result;
}