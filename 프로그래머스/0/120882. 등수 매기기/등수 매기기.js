function solution(score) {
    const map = new Map()
    const averageArr = score.map((x) => {
        const average = x.reduce((acc,cur) => acc + cur, 0) / 2;
        map.set(average, (map.get(average) || 0) + 1);
        return average
    })
    const sortedArr = Array.from(map).sort((a,b) => b[0] - a[0]);
    let rank = 0;
    sortedArr.forEach((x, i) => {
        const rankCount = x[1];
        sortedArr[i][1] = rank + 1;
        rank += rankCount;
    })
    const newMap =  new Map(sortedArr);
    return averageArr.map(x => newMap.get(x));
}