function solution(N, stages) {
    const success = new Array(N + 1).fill(0);
    stages.forEach((stage) => {
        for(let i = 0; i < stage; i++){
            success[i] += 1;
        }
    })
    const arr = [];
    let people = stages.length;
    for(let i = 0; i < success.length - 1; i++){
        const failCount = success[i] - success[i + 1]
        arr.push(failCount / people);
        people -= failCount;
    }
    const result = Object.entries(arr).sort((a,b)=> b[1] - a[1]).map(x => +x[0] + 1);
    return result;
}